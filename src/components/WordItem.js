import React from 'react';
import '../styles/App.css';
import '../styles/ListItems.css';
import { SortableElement } from 'react-sortable-hoc';

const WordItem = SortableElement(({ value }) =>
  <li className='list-item word-item'>
    <div className='word-arrow'>
      <p>{value}</p>
    </div>
  </li>
);

export default WordItem;
