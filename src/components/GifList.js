import React from 'react';
import GifItem from './GifItem';
import ListInfo from '../containers/ListInfo';
import Spinner from './Spinner';
import '../styles/List.css';

//gifs must be background images!
//or use the still!
//(so text can be displayed on top)

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
