import { createNewTags } from "../utils.js";

export const updateScore = score => ({ type: "UPDATE_SCORE", score });

export const submitAnswers = () => ({ type: "SUBMIT" });

export const startNewGame = () => ({ type: "START_NEW_GAME" });

export const startNextRound = newWords => ({
  type: "START_NEXT_ROUND",
  newWords,
  newTags: createNewTags(newWords)
});

export const updateTags = (oldIndex, newIndex) => ({
  type: "UPDATE_TAGS",
  oldIndex,
  newIndex
});
