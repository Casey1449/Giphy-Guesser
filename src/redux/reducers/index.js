import { combineReducers } from "redux";
import tags from "./tags";
import gifs from "./gifs";
import gameplay from "./gameplay";

// Reducers:

const correctAnswers = (state = [], action) =>
  action.type === "START_NEXT_ROUND" ? action.newWords : state;

const listLength = (state = 4, action) =>
  action.type === "UPDATE_CHALLENGE_LEVEL" ? action.number : state;

const gifRating = (state = "pg", action) =>
  action.type === "UPDATE_GIF_RATING" ? action.rating : state;

const score = (state = 0, action) => {
  switch (action.type) {
    case "UPDATE_SCORE":
      return state + action.score;
    case "START_NEW_GAME":
      return 0;
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  correctAnswers,
  tags,
  listLength,
  gifRating,
  gifs,
  gameplay,
  score
});

export default rootReducer;
