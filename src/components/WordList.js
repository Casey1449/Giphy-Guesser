import React from 'react';
import WordBox from './WordBox';
import '../styles/List.css';

export default () => {
  return (
    <ul className='list word-list'>
      <WordBox />
      <WordBox />
      <WordBox />
      <WordBox />
    </ul>
  );
};
