import React from 'react';
import '../styles/ListItems.css';
import Spinner from './Spinner';

export default ({ value }) => {
  return (
    <li className='list-item gif-item'>
      { !value.desktop ?
          <div style={{color: 'black'}}>{value}</div>
        :
          <img className='gif' src={value.desktop.url} alt='gif'/>
      }
    </li>
  )
};
