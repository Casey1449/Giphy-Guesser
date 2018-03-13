import { combineReducers } from "redux";
import randomWords from "random-words";
import { evaluateTagPositions, createNewTags } from "../utils.js";
import { arrayMove } from "react-sortable-hoc";

// Get array of 4 random words
const initialWords = randomWords(4);

// This util pipes the initial array of words through 3 functions:
// 1. Maps through the words to make an object that contains the word, its correct 'target' index, and a bool describing the correctness of its current position (always starts true),
// 2. Shuffles the tags Objects
// 3. Evaluates the shuffled position, and updates the bool describing correctness
const initialTags = createNewTags(initialWords);

// Reducers:

const correctAnswers = (state = initialWords, action) =>
  action.type === "START_NEXT_ROUND" ? action.newWords : state;

const tags = (state = initialTags, action) => {
  switch (action.type) {
    case "START_NEXT_ROUND":
      return action.newTags;
    case "UPDATE_TAGS":
      return evaluateTagPositions(
        arrayMove(state, action.oldIndex, action.newIndex)
      );
    default:
      return state;
  }
};

const listLength = (state = 4, action) =>
  action.type === "UPDATE_CHALLENGE_LEVEL" ? action.number : state;

const gifs = (state = {}, action) => {
  switch (action.type) {
    case "GIFS_LOAD_REQUEST":
      return {
        loading: true,
        loaded: false
      };
    case "GIFS_LOAD_SUCCESS":
      return {
        loading: false,
        loaded: true,
        results: action.result
      };
    case "GIFS_LOAD_FAILURE":
      return {
        loading: false,
        loaded: false,
        error: action.error
      };
    default:
      return state;
  }
};

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
  // isFetchingGifs,
  gifs,
  score,
  answersSubmitted
});

export default rootReducer;
