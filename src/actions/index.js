import fetch from 'isomorphic-fetch';

export const updateScore = score => (
  { type: 'UPDATE_SCORE', score }
);

export const startNextRound = (newWords, newTags) => (
  { type: 'START_NEXT_ROUND', newWords, newTags }
);

export const updateTags = (oldIndex, newIndex) => (
  { type: 'UPDATE_TAGS', oldIndex, newIndex }
);

export const requestingGifs = () => (
  { type: 'REQUESTING_GIFS' }
);

export const replaceGifs = (newGifItems) => (
  { type: 'REPLACE_GIFS',
    newGifItems
  }
);

const createGifItem = (json, word) => (
  {
    word,
    desktopEmbedded: json.data[0].embed_url,
    mobileStill: json.data[0].images.fixed_height_still
  }
);

const fetchGifByWord = word => (
  fetch(`http://api.giphy.com/v1/gifs/search?q=${word}&limit=1&api_key=dc6zaTOxFJmzC`)
  .then(response => response.json())
  .then((json, word) => createGifItem(json, word))
);

//convert to promises, if I can:
export const fetchGifs = () => {
  return (dispatch, getState) => {
    dispatch(requestingGifs());
    return (dispatch, getState) => {
      return dispatch(
        replaceGifs(
          getState().correctAnswers
            .map(word => fetchGifByWord(word))
        )
      );
    };
  };
};

// const mapWordsToGifs = words => (
//   words.map(word => fetchGifByWord(word))
// );

// export const fetchGifs = () => (
//   (dispatch, getState) =>
//     dispatch(requestingGifs())
//       .then((res, getState) => mapWordsToGifs(getState().correctAnswers))
//       .then((gifs, dispatch) => dispatch(replaceGifs(gifs)))
// );
