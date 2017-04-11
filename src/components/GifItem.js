import React from 'react';
import '../styles/ListItems.css';
import Spinner from './Spinner';

export default ({ value }) => {
  return (
    <li className='list-item gif-item'>
      { !value.mobileStill ?
          <div style={{color: 'black'}}>{value}</div>
        :
          <img className={}src={value.mobileStill.url} alt='gif'/>
      }
    </li>
  )
};
