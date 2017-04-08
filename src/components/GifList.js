import React from 'react';
import GifItem from './GifItem';
import '../styles/List.css';

export default () => {
  return (
    <ul className='list gif-list'>
      <GifItem />
      <GifItem />
      <GifItem />
      <GifItem />
    </ul>
  );
};
