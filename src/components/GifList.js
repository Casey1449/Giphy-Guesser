import React from 'react';
import GifBox from './GifBox';
import '../styles/GifList.css';

export default () => {
  return (
    <div className='gif-list'>
      <ul className='gif-list'>
        <GifBox />
        <GifBox />
        <GifBox />
        <GifBox />
      </ul>
    </div>
  );
};
