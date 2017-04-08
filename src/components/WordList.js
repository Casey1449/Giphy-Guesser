import React from 'react';
import WordItem from './WordItem';
import { SortableContainer } from 'react-sortable-hoc';
import '../styles/List.css';

export default SortableContainer((props) => {

  return(
    <ul className='list word-list'>
      <WordItem word={'ReallyLongWord'} index={1}/>
      <WordItem word={'ox'} index={2}/>
      <WordItem word={'ox'} index={3}/>
      <WordItem word={'Medium'} index={4}/>
    </ul>
  );
});
