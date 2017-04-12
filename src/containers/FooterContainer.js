import { connect } from 'react-redux';
import { updateScore, startNextRound, fetchGifs, submitAnswers } from '../actions/index.js';
import randomWords from 'random-words';
import { createNewTags } from '../utils.js';

const mapStateToProps = state => {
  const { score, tags, answersSubmitted } = state;
  return {
    score,
    tags,
    answersSubmitted
  };
};

const mapDispatchToProps = dispatch => {
  return {
    startClick: (score) => {
        let newWords = randomWords(4);
        dispatch(updateScore(score));
        dispatch(fetchGifs(newWords));
        dispatch(startNextRound(newWords, createNewTags(newWords)));
      },
    submitClick: () => dispatch(submitAnswers())
  };
};

const FooterContainer = connect(
  mapStateToProps,
  mapDispatchToProps
);

export default FooterContainer;
