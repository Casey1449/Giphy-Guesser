import { connect } from 'react-redux';
import { updateScore, startNextRound } from '../actions/index.js';
import randomWords from 'random-words';
import { shuffle, createNewTags } from '../utils.js';

const mapStateToProps = state => {
  const { tags, answersSubmitted, correctAnswers } = state;
  return {
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
