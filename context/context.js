import { createContext } from "react";

export const GoalContext = createContext({
  goals: [],
  isModal: false,
});
