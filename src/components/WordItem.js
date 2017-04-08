import React from 'react';
import '../styles/ListItems.css';
import { SortableElement } from 'react-sortable-hoc';

const WordItem = SortableElement((props) =>
  <li className='list-item word-item'>
    <div className='word-arrow'>
      <p>{props.word}</p>
    </div>
  </li>

  );

export default WordItem;
