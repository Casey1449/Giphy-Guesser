import React from 'react';
import '../styles/ListItems.css';
import Spinner from './Spinner';

export default ({ value }) => {

  if(value.desktop){

    const gifStyle = {
      background: `url(${value.desktop.url}) no-repeat`,
      backgroundPosition: 'center',
      backgroundSize: 'contain'
    };

    return (
      <li className='list-item gif-item'
          style = {gifStyle}>
        <p>Test Content</p>
      </li>
    );
  }

  return (
    <li className='list-item gif-item'>
      <Spinner />
    </li>
  );
};
//
// { !value.desktop ?
//   <div style={{color: 'black'}}>{value}</div>
//   :
//   <img className='gif' src={value.desktop.url} alt='gif'/>
// }
