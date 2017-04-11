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

export const replaceGifs = (newGifItems) => {
  return {
    type: 'REPLACE_GIFS',
    newGifItems
  };
};

const createGifItem = (json, word) => ({
  word,
  desktopEmbedded: json.data[0].embed_url,
  mobileStill: json.data[0].images.fixed_height_still
});

const fetchGifByWord = word => (
  fetch(`http://api.giphy.com/v1/gifs/search?q=${word}&limit=1&api_key=dc6zaTOxFJmzC`)
    .then(response => response.json())
    .then(json => createGifItem(json, word))
);

const mapWordsToGifs = words => (
  words.map(word => fetchGifByWord(word))
);

export const fetchGifs = words => {
  return function(dispatch) {
    return Promise.all(mapWordsToGifs(words))
      .then(gifs => dispatch(replaceGifs(gifs)));
  };
};
