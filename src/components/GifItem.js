import React from 'react';
import '../styles/ListItems.css';

export default ({ value }) => (
  <li className='list-item gif-item'>
    <p style={{color: 'black'}}>{value}</p>
  </li>
);
