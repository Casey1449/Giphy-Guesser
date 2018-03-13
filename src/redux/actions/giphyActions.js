import fetch from "isomorphic-fetch";

const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

const GIFS_LOAD = "GIFS_LOAD";

const fetchGifByWord = word =>
  fetch(
    `http://api.giphy.com/v1/gifs/search?q=${word}&limit=1&&api_key=${API_KEY}`
  )
    .then(response => response.json())
    .then(json => ({
      word,
      desktop: json.data[0].images.fixed_height_small
    }));

export const fetchGifs = words => ({
  type: GIFS_LOAD,
  promise: Promise.all(words.map(word => fetchGifByWord(word)))
});
