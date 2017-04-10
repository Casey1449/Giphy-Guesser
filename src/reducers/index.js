/*
state: {
  XXXcorrectAnswers: ['word1', 'word2', 'word3', 'word4'],
  tags: [
    {correctIndex, currentIndex, word: 'word1', correctPosition: bool },
    {correctIndex, currentIndex, word: 'word2', correctPosition: bool },
    {correctIndex, currentIndex, word: 'word3', correctPosition: bool },
    {correctIndex, currentIndex, word: 'word4', correctPosition: bool },
  ],
  XXXsubmitted: bool,
  XXXscore: int,
  (isFetching: bool),
  (fetchSuccess, fetcherror),
  (challengeLevel)
}
*/

import randomWords from 'random-words';
import { shuffle, evaluateTagPositions, createTagObjects } from '../utils.js';

const initialWords = randomWords(4);

const initialTags = evaluateTagPositions(
  shuffle(createTagObjects(initialWords))
);

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
      return action.updatedTags;
    default:
      return state;
  }

const score = (state = 0, action) => {
  if (action.type === 'UPDATE_SCORE') {
    return state + action.currentRoundScore;
  }
  return state;
};

const areAnswersSubmitted = (state = false, action) => {
  switch (action.type){
    case 'SUBMIT_ANSWERS':
      return state = true;
    case 'START_NEXT_ROUND':
      return state = false;
    default:
      return state;
  }























// Something like this for wordItems?
// const mapStateToProps = (state, ownProps) => {
//   return {
//     winner: ownProps.currentValue === state.correctAnswers[ownProps.currentIndex],
//   }
// }

//...and for gifItems?
// const mapStateToProps = (state, ownProps) => {
//   return {
//     winner: ownProps.value === state.userAnswers[ownProps.currentIndex],
//   }
// }
