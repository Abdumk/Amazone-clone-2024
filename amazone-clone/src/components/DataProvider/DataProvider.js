import React, { createContext, useReducer } from "react";
import { initialState, reducer } from "../../Utility/Reducer";


export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  // these  "const contextValue" should declare by const b/c the value in always changebel so we give constant

  const contextValue = useReducer(reducer, initialState);
  return (
    <DataContext.Provider value={contextValue}>
      {children}
    </DataContext.Provider>
  );
};
