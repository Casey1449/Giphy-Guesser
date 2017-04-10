import React from 'react';
import '../styles/ListItems.css';

export default ({word}) => {
  return (
    <li className='list-item gif-item'>
      <p style={{color: 'black'}}>{word}</p>
    </li>
  );
};
