import { connect } from 'react-redux';
import { updateScore, startNextRound, fetchGifs } from '../actions/index.js';
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
    startClick: () => {
        let newWords = randomWords(4);
        dispatch(startNextRound(newWords, createNewTags(newWords)));
        dispatch(fetchGifs());
      },
    submitClick: score => dispatch(updateScore(score))
  };
};

const FooterContainer = connect(
  mapStateToProps,
  mapDispatchToProps
);

export default FooterContainer;
