import { combineReducers } from 'redux';
import randomWords from 'random-words';
import { evaluateTagPositions, createNewTags } from '../utils.js';
import { arrayMove } from 'react-sortable-hoc';

/*morestate:
gifs: {
  isFetching: bool,
  didInvalidate?,
  gifItems: [{}, {}, {}]
}
*/

const initialWords = randomWords(4);

const initialTags = createNewTags(initialWords);

const initialGifs = {
  isFetching: false,
  // didInvalidate: false,
  gifItems: []
};

const correctAnswers = (state = initialWords, action) =>
  action.type === 'START_NEXT_ROUND' ? action.newWords : state;

const tags = (state = initialTags, action) => {
  switch (action.type){
    case 'START_NEXT_ROUND':
      return action.newTags;
    case 'UPDATE_TAGS':
      return evaluateTagPositions(
        arrayMove(state, action.oldIndex, action.newIndex)
      );
    default:
      return state;
  }
};

const gifs = (state = initialGifs, action) => {
  switch (action.type) {
    // case INVALIDATE_ROUND:
    //   return Object.assign({}, state, {
    //     didInvalidate: true
    //   })
    case REQUEST_POSTS:
      return Object.assign({}, state, {
        isFetching: true,
        didInvalidate: false
      })
    case RECEIVE_POSTS:
      return Object.assign({}, state, {
        isFetching: false,
        didInvalidate: false,
        items: action.posts,
        lastUpdated: action.receivedAt
      })
    default:
      return state
  }
}

const score = (state = 0, action) =>
  action.type === 'UPDATE_SCORE' ? state + action.score : state;

const answersSubmitted = (state = false, action) => {
  switch (action.type){
    case 'UPDATE_SCORE':
      return state = true;
    case 'START_NEXT_ROUND':
      return state = false;
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  correctAnswers,
  tags,
  score,
  answersSubmitted
});

export default rootReducer;
