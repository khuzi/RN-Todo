import "react-native-get-random-values";
import { v4 as uuid } from "uuid";

import { ADD_GOAL, REMOVE_GOAL, MODAL_OPEN, MODAL_CLOSE } from "./actions";

const addGoal = (goal, state) => {
  const updatedGoals = [...state.goals];
  updatedGoals.push({ id: uuid(), value: goal });
  return { ...state, goals: updatedGoals, isModal: false };
};

const removeGoal = (id, state) => {
  const updatedGoals = state.goals.filter((goal) => goal.id !== id);
  return { ...state, goals: updatedGoals };
};

export const goalReducer = (state, action) => {
  switch (action.type) {
    case ADD_GOAL:
      return addGoal(action.goal, state);
    case REMOVE_GOAL:
      return removeGoal(action.id, state);
    case MODAL_OPEN:
      return { ...state, isModal: true };
    case MODAL_CLOSE:
      return { ...state, isModal: false };
    default:
      return state;
  }
};
