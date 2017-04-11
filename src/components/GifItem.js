import React from 'react';
import '../styles/ListItems.css';
import Spinner from './Spinner';

export default ({ value, winner }) => {

  if (!value || !value.desktop) {

    return (
      <li className='list-item gif-item'>
        <p>{winner}</p>
      </li>
    );

  } else {

    const gifStyle = {
      background: `url(${value.desktop.url}) no-repeat`,
      backgroundPosition: 'center',
      backgroundSize: 'contain'
    };

    return (
      <li className='list-item gif-item'
          style = {gifStyle}>
      </li>
    );
  }
};
//
// { !value.desktop ?
//   <div style={{color: 'black'}}>{value}</div>
//   :
//   <img className='gif' src={value.desktop.url} alt='gif'/>
// }
