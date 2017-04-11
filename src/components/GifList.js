import React from 'react';
import GifItem from './GifItem';
import ListInfo from '../containers/ListInfo';
import Spinner from './Spinner';
import '../styles/List.css';

const GifList = ({ answersSubmitted, tags, correctAnswers }) => {
  return (
    <ul className='list gif-list'>
      { answersSubmitted ?
          tags.map((t, i) =>
            <GifItem
              key={i}
              value={ t.isInCorrectPosition ? '+25!' : '❌' }
              />
          )
        : correctAnswers.map((w, i) =>
          <GifItem
            key={i}
            value={w || <Spinner/>}
            />
          )
      }
    </ul>
  );
};

export default ListInfo(GifList);
