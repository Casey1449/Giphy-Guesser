import { connect } from "react-redux";
import {
  updateScore,
  startNextRound,
  submitAnswers,
  startNewGame
} from "../redux/actions/index.js";
import { updateChallengeLevel } from "../redux/actions/settingsActions";
import { fetchGifs } from "../redux/actions/giphyActions.js";
import randomWords from "random-words";

const mapStateToProps = state => {
  const { score, tags, gameplay, listLength } = state;
  return {
    score,
    tags,
    gameplay,
    listLength
  };
};

const mapDispatchToProps = dispatch => {
  return {
    newGameClick: number => {
      dispatch(startNewGame());
      let newWords = randomWords(number);
      dispatch(fetchGifs(newWords));
      dispatch(startNextRound(newWords));
    },
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

const GameplayContainer = connect(mapStateToProps, mapDispatchToProps);

export default GameplayContainer;
