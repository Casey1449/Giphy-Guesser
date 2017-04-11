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

// export const stashGif = (word, json) => (
//   { type: 'STASH_GIF',
//     gifItem: {
//       word,
//       desktopEmbedded: json.data[0].embed_url,
//       mobileStill: json.data[0].images.fixed_height_still
//     }
//   }
// );
//
// `http://api.giphy.com/v1/gifs/search?q=${word}&limit=1&api_key=dc6zaTOxFJmzC`
//
// export const requestGif = () => (
//   { type: 'REQUEST_GIF', response: '' }
// );
//
// fetchGifs(state)=>{
//   //isfetching: true
//   //reset gif array
//   getstate()
//   state.correctAnswers.map(w => fetchGif(w))
// }
//
// function fetchGif(word) {
//   return dispatch => {
//     dispatch(request(subreddit))
//     return fetch(`https://www.reddit.com/r/${subreddit}.json`)
//     .then(response => response.json())
//     .then(json => dispatch(receivePosts(subreddit, json)))
//   }
// }
