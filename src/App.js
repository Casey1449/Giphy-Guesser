import React, { Component } from "react";
import Header from "./components/Header/Header";
import WordList from "./components/WordList/WordList";
import GifList from "./components/GifList/GifList";
import Footer from "./components/Footer/Footer";
import { connect } from "react-redux";
import { fetchGifs, startNextRound } from "./redux/actions";
import randomWords from "random-words";
import { createNewTags } from "./redux/utils.js";
import styles from "./App.scss";

class App extends Component {
  componentWillMount() {
    const { dispatch, initialWords } = this.props;
    dispatch(fetchGifs(initialWords));
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.listLength !== this.props.listLength) {
      let newWords = randomWords(nextProps.listLength);
      this.props.dispatch(fetchGifs(newWords));
      this.props.dispatch(startNextRound(newWords, createNewTags(newWords)));
    }
  }

  render() {
    return (
      <div className={styles.App}>
        <Header />
        <div className={styles.game_box}>
          <WordList axis={"xy"} />
          <GifList />
        </div>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  initialWords: state.correctAnswers,
  listLength: state.listLength
});

export default connect(mapStateToProps)(App);
