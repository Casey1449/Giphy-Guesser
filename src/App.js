import React, { Component } from 'react';
import Header from './components/Header';
import WordList from './components/WordList';
import GifList from './components/GifList';
import Footer from './components/Footer';
import { connect } from 'react-redux';
import { fetchGifs } from './actions';
import './styles/App.css';

class App extends Component {
  constructor(props) {
    super(props);
  }
  componentWillMount(){
    const { dispatch, initialWords } = this.props;
    dispatch(fetchGifs(initialWords));
  }

  // componentDidUpdate(prevProps) {
  //   if (this.props.selectedSubreddit !== prevProps.selectedSubreddit) {
  //     const { dispatch, selectedSubreddit } = this.props
  //     dispatch(fetchPostsIfNeeded(selectedSubreddit))
  //   }
  // }

  render() {
    return (
      <div className="App">
        <Header />
          <div className='game-box'>
            <WordList axis={'xy'} />
            <GifList />
          </div>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = state => ({initialWords: state.correctAnswers});

export default connect(mapStateToProps)(App);
