import fetch from "isomorphic-fetch";
import { createNewTags } from "../utils.js";

const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

export const updateScore = score => ({ type: "UPDATE_SCORE", score });

export const submitAnswers = () => ({ type: "SUBMIT" });

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

export const requestingGifs = () => ({ type: "REQUESTING_GIFS" });
export const gifLoadSuccess = () => ({ type: "GIF_LOAD_SUCCESS" });
export const gifLoadFailure = e => ({ type: "GIF_LOAD_FAILURE", e });

export const replaceGifs = newGifItems => {
  return {
    type: "REPLACE_GIFS",
    newGifItems
  };
};

export const updateChallengeLevel = number => ({
  type: "UPDATE_CHALLENGE_LEVEL",
  number
});

const fetchGifByWord = word =>
  fetch(
    `http://api.giphy.com/v1/gifs/search?q=${word}&limit=1&&api_key=${API_KEY}`
  )
    .then(response => response.json())
    .then(json => ({
      word,
      desktop: json.data[0].images.fixed_height_small
    }));

export const fetchGifs = words => async dispatch => {
  dispatch(requestingGifs());
  try {
    const gifs = await Promise.all(words.map(word => fetchGifByWord(word)));
    dispatch(replaceGifs(gifs));
    dispatch(gifLoadSuccess());
  } catch (e) {
    console.log({ e });
    dispatch(gifLoadFailure(e.message));
  }
};
