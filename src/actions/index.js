import fetch from 'isomorphic-fetch';

export const updateScore = score => (
  { type: 'UPDATE_SCORE', score }
);

export const submitAnswers = () => (
  { type: 'SUBMIT' }
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

export const replaceGifs = (newGifItems) => {
  return {
    type: 'REPLACE_GIFS',
    newGifItems
  };
};

const fetchGifByWord = word => (
  fetch(`http://api.giphy.com/v1/gifs/search?q=${word}&limit=1&api_key=dc6zaTOxFJmzC`)
    .then(response => response.json())
    .then(json => ({
      word,
      desktop: json.data[0].images.fixed_height,
      mobileStill: json.data[0].images.fixed_height_still
    })
  )
);

export const fetchGifs = words => (
  dispatch => {
    dispatch(requestingGifs());
    return Promise.all( words.map(word => fetchGifByWord(word)) )
      .then(gifs => dispatch(replaceGifs(gifs)));
  }
);
