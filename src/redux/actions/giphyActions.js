import fetch from "isomorphic-fetch";

const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

const GIFS_LOAD = "GIFS_LOAD";

const fetchGifByWord = (word, rating = "") =>
  fetch(
    `http://api.giphy.com/v1/gifs/search?q=${word}&limit=1&rating=${rating}&api_key=${API_KEY}`
  )
    .then(response => response.json())
    .then(json => ({
      word,
      desktop: json.data[0].images.fixed_height_small
    }));

export const resolveGifs = (words, rating) => ({
  type: GIFS_LOAD,
  promise: Promise.all(words.map(word => fetchGifByWord(word, rating)))
});

export const fetchGifs = words => (dispatch, getState) => {
  const rating = getState().gifRating;
  return dispatch(resolveGifs(words, rating));
};
