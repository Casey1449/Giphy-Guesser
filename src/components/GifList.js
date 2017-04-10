import React from 'react';
import GifItem from './GifItem';
import ListInfo from '../containers/ListInfo';
import '../styles/List.css';

const GifList = ({answersSubmitted, correctAnswers}) => {
  return (
    <ul className='list gif-list'>
      {correctAnswers.map((w, i) =>
        <GifItem
          key={i}
          word={w}
          />
      )}
    </ul>
  );
};

export default ListInfo(GifList);
