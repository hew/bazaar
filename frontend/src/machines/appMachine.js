import { AsyncStorage } from 'react-native';
import { Machine, assign, send } from 'xstate';
import { SessionMachine } from './sessionMachine';
import { GameSubscriptionMachine } from './subscriptionMachines';
import { LogOutMachine } from './logoutMachine';
import { Auth, QUERY, queries, queriesCustom, constants, GRAPH, mutations } from '../aws/amplify';


// TODO: Move this or something
const tryAuth = async () => {
  const info = await Auth.currentUserInfo();

  if (!info) new Error('User no longer signed in.');

  const player = await QUERY(queriesCustom.getPlayerTeam, { id: info.username }).catch(err =>
    console.log(err),
  );

  return { playerId: info.username, teamId: player.team.id };
};

export const AppMachine = Machine(
  {
    id: 'app',
    initial: 'loggedOut',
    context: {
      gameState: { game: 'notActive', round: 'roundOne', raw: '' },
      gameId: null,
      playerData: null,
      playerId: null,
      authChecked: null,
      isOnboarded: null,
      loggingOut: null,
      s3Mail: null,
      s3Policy: null,
      s3Settings: null,
      teamData: null,
      teamId: null,
      teamOnlineState: null,
    },
    states: {
      loggedOut: {
        on: {
          LOGIN_CHECK: 'authCheck',
          LOGIN: 'authCheck',
        },
      },
      authCheck: {
        invoke: {
          src: _ => tryAuth,
          onDone: {
            target: 'syncing',
            actions: assign({
              playerId: (_, event) => event.data.playerId,
              teamId: (_, event) => event.data.teamId,
            }),
          },
          onError: {
            target: 'loggedOut',
            actions: assign({ authChecked: _ => true }),
          },
        },
        on: {
          LOGIN_FAILED: {
            target: 'loggedOut',
            actions: assign({ authChecked: _ => true }),
          },
        },
      },
      authenticate: {
        on: {
          AUTH: {
            target: 'syncing',
            actions: assign({ playerId: (_, event) => event.data }),
          },
        },
      },
      syncing: {
        invoke: {
          src: 'SessionMachine',
          data: {
            playerId: (context, _) => context.playerId,
            teamId: (context, _) => context.teamId,
          },
          onDone: {
            target: 'loggedIn',
            actions: [
              assign({
                authChecked: _ => true,
                playerData: (_, event) => event.data.playerData,
                teamData: (_, event) => event.data.teamData,
                isOnboarded: (_, event) => event.data.isOnboarded,
                s3Mail: (_, event) => event.data.s3Mail,
                s3Policy: (_, event) => event.data.s3Policy,
                s3Settings: (_, event) => event.data.s3Settings,
              }),
            ],
          },
          onError: {
            target: 'loggedOut',
          },
        },
        on: {
          LOGIN_FAILED: {
            target: 'loggedOut',
            actions: assign({ authChecked: _ => true }),
          },
        },
      },
      loggedIn: {
        invoke: [
          {
            src: 'GameSubscriptionMachine',
          },
          {
            id: 'pollingService',
            src: (context, event) => (callback, onEvent) => {
              const id = setInterval(async () => {
                let onlineState = [];
                // console.log('**************************', JSON.stringify(context, null, 4));
                let response = await GRAPH(mutations.updatePlayerOnline, {
                  input: {
                    id: context.playerId,
                    playerId: context.playerId,
                    teamId: context.teamId,
                  },
                });
                onlineState.push({ online: true, playerId: context.playerId });
                // console.log('FirstPlayerData', JSON.stringify(response, null, 4));
                let teamData = await QUERY(queries.listPlayerOnlines, {
                  filter: {
                    teamId: { eq: response.data.updatePlayerOnline.teamId },
                  },
                });
                // console.log('TeamPlayerData', JSON.stringify(teamData, null, 4));
                teamData.items.map((item, index) => {
                  let timeRange =
                    new Date(response.data.updatedAt).getTime() -
                    constants.frontend.prod.offlineCheckInterval;
                  if (
                    item.playerId !== context.playerId &&
                    new Date(item.updatedAt).getTime() > timeRange
                  ) {
                    onlineState.push({ online: true, playerId: item.playerId });
                  } else if (item.playerId !== context.playerId) {
                    onlineState.push({ online: false, playerId: item.playerId });
                  }
                  // console.log('onlineState', JSON.stringify(onlineState, null, 4));
                }),
                  callback({ type: 'SYNC_TEAM_STATUS', data: onlineState });
              }, constants.frontend.prod.onlineCheckInterval);

              return () => clearInterval(id);
            },
          },
        ],
        on: {
          SYNC_TEAM_STATUS: {
            actions: [
              assign({
                teamOnlineState: (_, event) => {
                  return event.data;
                },
              }),
            ],
          },
          LOGOUT: {
            target: 'loggingOut',
          },
          UPDATE_GAME_GLOBAL: {
            actions: [
              assign({
                gameState: (_, event) => event.state,
                gameId: (_, event) => event.id,
              }),
            ],
          },
          SYNC_MAIL: {
            actions: [
              assign({
                s3Mail: (_, event) => ({ default: false, mailData: event.data }),
              }),
            ],
          },
          SET_ONBOARDED: {
            actions: [
              assign({
                isOnboarded: (_, event) => {
                  // This is a promise we're not awaiting 😈. Not good.
                  AsyncStorage.setItem('qup:isOnboarded', true);
                  return true;
                },
              }),
            ],
          },
        },
      },
      loggingOut: {
        invoke: {
          src: 'LogOutMachine',
          data: {
            playerData: (context, _) => context.playerData,
            playerId: (context, _) => context.playerId,
          },
          onDone: {
            target: 'loggedOut',
            actions: assign({
              authChecked: false,
              loggingOut: true,
            }),
          },
        },
      },
    },
  },
  {
    services: {
      GameSubscriptionMachine,
      SessionMachine,
      LogOutMachine,
    },
    actions: {},
    activities: {},
  },
);
