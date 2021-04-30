import React, { createContext, useContext, useReducer } from 'react';
import produce from 'immer';

export const createStore = initialState => {
  const StateContext = createContext(initialState);
  const UpdateContext = createContext(null);

  const StoreProvider = ({ children }) => {
    const [state, updateState] = useReducer(produce, initialState);
    return (
      <UpdateContext.Provider value={updateState}>
        <StateContext.Provider value={state}>{children}</StateContext.Provider>
      </UpdateContext.Provider>
    );
  };

  const useStore = () => [useContext(StateContext), useContext(UpdateContext)];

  return { Provider: StoreProvider, useStore };
};
