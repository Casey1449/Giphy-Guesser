import { connect } from "react-redux";
import {
  updateScore,
  startNextRound,
  fetchGifs,
  submitAnswers,
  updateChallengeLevel
} from "../actions/index.js";
import randomWords from "random-words";
// import { createNewTags } from "../utils.js";

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
