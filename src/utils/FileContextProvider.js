import React, { createContext, useContext, useReducer } from "react";

export const FileContext = createContext();

export const FileContextProvider = ({ reducer, initialState, children }) => (
  <FileContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </FileContext.Provider>
);

export const useFileContextState = () => useContext(FileContext);
