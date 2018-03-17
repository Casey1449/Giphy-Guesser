import React, { Component } from "react";
import Header from "./components/Header/Header";
import WordList from "./components/WordList/WordList";
import GifList from "./components/GifList/GifList";
import Footer from "./components/Footer/Footer";
import { connect } from "react-redux";
import { startNextRound } from "./redux/actions/index";
import { fetchGifs } from "./redux/actions/giphyActions";
import randomWords from "random-words";
import styles from "./App.scss";
import GameOverModal from "./components/GameOverModal/GameOverModal";

class App extends Component {
  componentWillMount() {
    const initialWords = randomWords(this.props.listLength);
    this.props.fetchGifs(initialWords);
    this.props.startNextRound(initialWords);
  }

  componentWillReceiveProps(nextProps) {
    if (
      nextProps.listLength !== this.props.listLength ||
      nextProps.gifRating !== this.props.gifRating
    ) {
      const newWords = randomWords(nextProps.listLength);
      this.props.fetchGifs(newWords);
      this.props.startNextRound(newWords);
    }
  }

  render() {
    return (
      <div className={styles.App}>
        <Header />
        <div className={styles.game_box}>
          <WordList axis={"xy"} />
          <GifList />
          <GameOverModal />
        </div>
        <Footer />
      </div>
    );
  }
}

export default connect(
  ({ listLength, gifRating }) => ({ listLength, gifRating }),
  {
    fetchGifs,
    startNextRound
  }
)(App);
