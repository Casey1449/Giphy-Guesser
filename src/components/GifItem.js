import React from 'react';
import '../styles/ListItems.css';
import Spinner from './Spinner';

export default ({ value }) => (
  <li className='list-item gif-item'>
    <p style={{color: 'black'}}>{value}</p>
  </li>
);
