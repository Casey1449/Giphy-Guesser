import React from 'react';
import '../styles/ListItems.css';
import { SortableElement } from 'react-sortable-hoc';

const WordItem = SortableElement((props) =>
<svg version="1.1" preserveAspectRatio="none" x='0' y='0' width='100px' height='60px' viewBox="0 0 110 56" fill='white'><polygon points="0,0 0,50 90,50 110,25 90,0 "/></svg>
  );

export default WordItem;




// <li className='list-item word-item'>
// <div className='word-arrow'>
// <p>{props.word}</p>
// </div>
// </li>
