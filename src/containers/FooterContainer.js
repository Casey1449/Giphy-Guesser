import { connect } from 'react-redux';
import { updateScore, startNextRound } from '../actions/index.js';
import randomWords from 'random-words';
import { createNewTags } from '../utils.js';

const mapStateToProps = state => {
  const { score, tags, answersSubmitted, correctAnswers } = state;
  return {
    score,
    tags,
    answersSubmitted,
    correctAnswers
  };
};

const mapDispatchToProps = dispatch => {
  return {
    startClick: () => {
        let newWords = randomWords(4);
        dispatch(startNextRound(newWords, createNewTags(newWords)));
      },
    submitClick: (score) => {
      dispatch(updateScore(score));
    }
  };
};

const FooterContainer = connect(
  mapStateToProps,
  mapDispatchToProps
);

export default FooterContainer;
