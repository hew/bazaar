import { AsyncStorage } from 'react-native';
import { Auth } from 'aws-amplify';
import { Machine, assign, send } from 'xstate';

export const AppMachine = Machine(
  {
    id: 'app',
    initial: 'authCheck',
    context: { authChecked: false },
    states: {
      authCheck: {
        invoke: {
          src: _ => Auth.currentAuthenticatedUser(),
          onDone: {
            target: 'loggedIn',
            actions: assign({ authChecked: _ => true }),
          },
          onError: {
            target: 'loggedOut',
            actions: assign({ authChecked: _ => true }),
          },
        },
      },
      loggedOut: {
        on: { LOG_IN: 'loggedIn' },
      },
      loggedIn: {
        on: { LOG_OUT: 'loggedOut' },
      },
    },
  },
  {
    services: {},
    actions: {},
    activities: {},
  },
);
