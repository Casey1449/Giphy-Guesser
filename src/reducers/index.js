import { combineReducers } from 'redux';
import randomWords from 'random-words';
import { evaluateTagPositions, createNewTags } from '../utils.js';
import { arrayMove } from 'react-sortable-hoc';

const initialWords = randomWords(4);

const initialTags = createNewTags(initialWords);

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

const isFetchingGifs = (state = false, action) => {
  switch (action.type){
    case 'REQUESTING_GIFS':
      return true;
    case 'REPLACE_GIFS':
      return false;
    default:
      return state;
  }
};

const gifs = (state = [], action) =>
  action.type === 'REPLACE_GIFS' ? action.newGifItems : state;

const score = (state = 0, action) =>
  action.type === 'UPDATE_SCORE' ? state + action.score : state;

const answersSubmitted = (state = false, action) => {
  switch (action.type){
    case 'SUBMIT':
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
  isFetchingGifs,
  gifs,
  score,
  answersSubmitted
});

export default rootReducer;
