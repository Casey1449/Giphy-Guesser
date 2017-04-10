import React from 'react';
import '../styles/ListItems.css';

export default ({ word }) => (
  <li className='list-item gif-item'>
    <p style={{color: 'black'}}>{word}</p>
  </li>
);
