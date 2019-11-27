import React, { createContext, useContext, useReducer } from 'react';

export const StateContext = createContext();

export const useStateValue = () => useContext(StateContext);

export const initialState = {
  game: {
    gameId: null,
    gameState: 'notActive',
    roundState: 'roundOne',
  },
  clock: {
    seconds: 0,
    duration: 0,
  },
  player: {
    playerId: null,
  },
  mailData: {
    default: null,
  },
  settings: {
    default: null,
  },
  privacy: {
    default: null,
  },
};

export const reducer = (state, action) => {
  console.log(`[REDUCER FIRING!]`);
  console.log(`[REDUCER TYPE]: ${action.type} `);
  console.log(`[REDUCER DATA]: ${JSON.stringify(action.data, null, 4)} `);
  switch (action.type) {
    case 'SET_GAME_KEY':
      return {
        ...state,
        game: {
          ...state.game,
          [action.key]: action.data,
        },
      };
    case 'SET_CLOCK_KEY':
      return {
        ...state,
        clock: {
          ...state.clock,
          [action.key]: action.data,
        },
      };
    case 'SET_PLAYER_KEY':
      return {
        ...state,
        player: {
          ...state.player,
          [action.key]: action.data,
        },
      };
    case 'SET_SETTING_DATA':
      return {
        ...state,
        settings: {
          ...state.settings,
          [action.key]: action.data,
        },
      };
    case 'SET_MAIL_DATA':
      return {
        ...state,
        mailData: {
          ...state.mailData,
          [action.key]: action.data,
        },
      };
    case 'SET_POLICYACCEPTANCE_DATA':
      return {
        ...state,
        privacy: {
          ...state.privacy,
          [action.key]: action.data,
        },
      };

    default:
      return state;
  }
};

export const StateProvider = ({ children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);
