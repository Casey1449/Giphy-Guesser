import { combineReducers } from 'redux';
import randomWords from 'random-words';
import { evaluateTagPositions, createNewTags } from '../utils.js';
import { arrayMove } from 'react-sortable-hoc';

const initialWords = randomWords(4);

const initialTags = createNewTags(initialWords);

const correctAnswers = (state = initialWords, action) => {
  if (action.type === 'START_NEXT_ROUND') {
    return action.newWords;
  }
  return state;
};

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

const score = (state = 0, action) => {
  if (action.type === 'UPDATE_SCORE') {
    return state + action.currentRoundScore;
  }
  return state;
};

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
