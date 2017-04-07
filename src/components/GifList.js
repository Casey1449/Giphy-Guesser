import React from 'react';
import GifBox from './GifBox';
import '../styles/List.css';

export default () => {
  return (
    <ul className='list gif-list'>
      <GifBox />
      <GifBox />
      <GifBox />
      <GifBox />
    </ul>
  );
};
