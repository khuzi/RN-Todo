import React, { useContext, useReducer } from "react";

import GoalContext from "./context";
import { goalReducer } from "./reducer";

const GoalContextProvider = ({ children }) => {
  const initialState = useContext(GoalContext);
  const [state, dispatch] = useReducer(goalReducer, initialState);

  return (
    <GoalContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {children}
    </GoalContext.Provider>
  );
};

export default GoalContextProvider;
