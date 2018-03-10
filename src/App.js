import React, { Component } from "react";
import Header from "./components/Header";
import WordList from "./components/WordList";
import GifList from "./components/GifList";
import Footer from "./components/Footer";
import { connect } from "react-redux";
import { fetchGifs, startNextRound } from "./actions";
import randomWords from "random-words";
import { createNewTags } from "./utils.js";
import "./styles/App.scss";

class App extends Component {
  constructor(props) {
    super(props);
  }
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
      <div className="App">
        <Header />
        <div className="game-box">
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
