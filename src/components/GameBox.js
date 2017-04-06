import React from 'react';
import WordList from './WordList';
import GifList from './GifList';
import '../styles/GameBox.css';

export default () => {
  return (
    <div className='game-box'>
      <WordList />
      <GifList />
    </div>
  );
};
