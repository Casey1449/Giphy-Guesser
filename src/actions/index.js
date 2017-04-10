export const updateScore = score => (
  { type: 'UPDATE_SCORE', score }
);

export const startNextRound = (newWords, newTags) => (
  { type: 'START_NEXT_ROUND', newWords, newTags }
);

export const updateTags = (oldIndex, newIndex) => (
  { type: 'UPDATE_TAGS', oldIndex, newIndex }
);

export const fetchGifs = () => (
  { type: 'FETCH_GIFS_REQUEST' }
);

export const fetchFail = () => (
  { type: 'FETCH_GIFS_FAILURE', error: 'Oops' }
);

export const fetchSuccess = () => (
  { type: 'FETCH_GIFS_SUCCESS', response: '' }
);
