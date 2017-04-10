import React, { Component } from 'react';
import Header from './components/Header';
import WordList from './components/WordList';
import GifList from './components/GifList';
import Footer from './components/Footer';
import './styles/App.css';

class App extends Component {
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

export default App;
