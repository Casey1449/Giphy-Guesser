import { combineReducers } from "redux";
import tags from "./tags";
import gifs from "./gifs";

// Reducers:

const correctAnswers = (state = [], action) =>
  action.type === "START_NEXT_ROUND" ? action.newWords : state;

const listLength = (state = 4, action) =>
  action.type === "UPDATE_CHALLENGE_LEVEL" ? action.number : state;

const score = (state = 0, action) =>
  action.type === "UPDATE_SCORE" ? state + action.score : state;

const answersSubmitted = (state = false, action) => {
  switch (action.type) {
    case "SUBMIT":
      return (state = true);
    case "START_NEXT_ROUND":
      return (state = false);
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  correctAnswers,
  tags,
  listLength,
  gifs,
  score,
  answersSubmitted
});

export default rootReducer;
