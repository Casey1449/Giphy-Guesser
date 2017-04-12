import React from 'react';
import '../styles/ListItems.css';
import Spinner from './Spinner';
import ListInfo from '../containers/ListInfo';

const GifMask = ({ winner, show }) => {
  return (
    <div
      className={`gif-mask winner-${winner.toString()}`}
      style={show ? {} : { display: 'none' }}
    >
      <span>{ winner ? '+25!' : 'X' }</span>
    </div>
  );
}

const GifItem = (props) => {

  const { answersSubmitted, tags, gifs, isFetchingGifs, correctAnswers, index } = props;

  if(isFetchingGifs || !gifs[index]){
    return(
      <li className='list-item gif-item'>
        <Spinner />
      </li>
    )
  } else {

    const gifUrl = gifs[index].desktop.url;

    const gifStyle = {
      background: `url(${gifUrl}) no-repeat`,
      backgroundPosition: 'center',
      backgroundSize: 'contain',
    };

    return(
      <li className='list-item gif-item'
          style={ gifStyle }>
        <GifMask
          show={ answersSubmitted }
          winner={ tags[index].isInCorrectPosition }
        />
      </li>
    );
  }
};

export default ListInfo(GifItem);

// style={{ display: answersSubmitted ? null : 'none' }}
