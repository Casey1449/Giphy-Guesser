import React from 'react';
import GifItem from './GifItem';
import ListInfo from '../containers/ListInfo';
import Spinner from './Spinner';
import '../styles/List.css';

const GifList = ({ answersSubmitted, tags, gifs, isFetchingGifs }) => {
  return (
    <ul className='list gif-list'>
      { answersSubmitted ?
          tags.map((t, i) =>
            <GifItem
              key={i}
              value={ t.isInCorrectPosition ? '+25!' : '❌' }
              />
          )
        : gifs.length !== 4 || isFetchingGifs ?
            <GifItem
              key={Math.random()}
              value={<Spinner />}
              />
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
