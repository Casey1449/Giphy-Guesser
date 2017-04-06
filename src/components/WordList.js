import React from 'react';
import WordBox from './WordBox';
import '../styles/WordList.css';

export default () => {
  return (
    <div className='word-list'>
      <ul className='word-list'>
        <WordBox />
        <WordBox />
        <WordBox />
        <WordBox />
      </ul>
    </div>
  );
};
