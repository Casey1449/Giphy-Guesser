import React from 'react';
import WordList from './WordList';
import GifList from './GifList';
import '../styles/GameBox.css';
import randomWords from 'random-words';

export default () => {

  console.log(randomWords(4))

  return (
    <div className='game-box'>
      <WordList axis={'xy'} />
      <GifList />
    </div>
  );
};
