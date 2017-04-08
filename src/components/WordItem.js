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






// <div>
// <svg className='white-arrow' version="1.1" preserveAspectRatio="none" >
// <g>
// <polygon points="0,0 0,50 90,50 110,25 90,0 "/>
// <text x="50%" y="50%" textAnchor="middle" fill='black'>Stuff in here</text>
// </g>
// </svg>
// </div>
