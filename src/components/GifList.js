import React from 'react';
import GifItem from './GifItem';
import ListInfo from '../containers/ListInfo';
import Spinner from './Spinner';
import '../styles/List.css';

const GifList = ({ answersSubmitted, tags, gifs, isFetchingGifs, correctAnswers }) => {
  return (
    <ul className='list gif-list'>
      { answersSubmitted ?
          gifs.map((t, i) =>
            <GifItem
              key={i}
              winner={tags[i].isInCorrectPosition}
              gif={gifs[i]}
              />
          )
        :
          gifs.map((g, i) =>
            <GifItem
              key={i}
              value={g}
            />
        )
      }
    </ul>
  );
};

export default ListInfo(GifList);
