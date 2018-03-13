import { connect } from "react-redux";
import {
  updateScore,
  startNextRound,
  submitAnswers,
  updateChallengeLevel
} from "../redux/actions/index.js";
import { fetchGifs } from "../redux/actions/giphyActions.js";
import randomWords from "random-words";

const mapStateToProps = state => {
  const { score, tags, answersSubmitted, listLength } = state;
  return {
    score,
    tags,
    answersSubmitted,
    listLength
  };
};

const mapDispatchToProps = dispatch => {
  return {
    startClick: number => {
      let newWords = randomWords(number);
      dispatch(fetchGifs(newWords));
      dispatch(startNextRound(newWords));
    },
    submitClick: score => {
      dispatch(submitAnswers());
      dispatch(updateScore(score));
    },
    newChallengeClick: number => {
      dispatch(updateChallengeLevel(number));
    }
  };
};

const FooterContainer = connect(mapStateToProps, mapDispatchToProps);

export default FooterContainer;
