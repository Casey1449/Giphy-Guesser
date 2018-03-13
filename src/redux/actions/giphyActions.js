import fetch from "isomorphic-fetch";

const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

const GIFS_LOAD = "GIFS_LOAD";
const GIFS_LOAD_SUCCESS = "GIFS_LOAD_SUCCESS";
const GIFS_LOAD_FAIL = "GIFS_LOAD_FAIL";

export const requestingGifs = () => ({ type: "REQUESTING_GIFS" });

export const replaceGifs = newGifItems => {
  return {
    type: "REPLACE_GIFS",
    newGifItems
  };
};

const fetchGifByWord = word => ({
  types: [GIFS_LOAD, GIFS_LOAD_SUCCESS, GIFS_LOAD_FAIL],
  promise: () =>
    fetch(
      `http://api.giphy.com/v1/gifs/search?q=${word}&limit=1&&api_key=${API_KEY}`
    )
});

// fetch(
//   `http://api.giphy.com/v1/gifs/search?q=${word}&limit=1&&api_key=${API_KEY}`
// )
//   .then(response => response.json())
//   .then(json => ({
//     word,
//     desktop: json.data[0].images.fixed_height_small
//   }));

export const fetchGifs = words => {
  console.log({ words });
  return {
    types: [GIFS_LOAD, GIFS_LOAD_SUCCESS, GIFS_LOAD_FAIL],
    promise: () =>
      fetch(
        `http://api.giphy.com/v1/gifs/search?q=${
          words[0]
        }&limit=1&&api_key=${API_KEY}`
      )
  };
};

// export const fetchGifs = () => console.log("FETCHING GIFS CALLED");

// const fetchGifByWord = word =>
//   fetch(
//     `http://api.giphy.com/v1/gifs/search?q=${word}&limit=1&&api_key=${API_KEY}`
//   )
//     .then(response => response.json())
//     .then(json => ({
//       word,
//       desktop: json.data[0].images.fixed_height_small
//     }));

// export const fetchGifs = words => dispatch => {
//   dispatch(requestingGifs());
//   return Promise.all(words.map(word => fetchGifByWord(word))).then(gifs =>
//     dispatch(replaceGifs(gifs))
//   );
// };
