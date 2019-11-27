import React, { createContext, useContext, useReducer } from 'react';

export const StateContext = createContext();

export const useStateValue = () => useContext(StateContext);

export const initialState = {
  beep: {},
};

export const reducer = (state, action) => {
  switch (action.type) {
    case 'PERFORM_ACTION':
      return {
        ...state,
        beep: {},
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
