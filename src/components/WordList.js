import React from 'react';
import WordItem from './WordItem';
import { SortableContainer } from 'react-sortable-hoc';
import ListInfo from '../containers/ListInfo';
import '../styles/List.css';

const WordList = SortableContainer(({ tags, answersSubmitted, correctAnswers }) => {
  return(
    <ul className='list word-list'>
      {tags.map((tag, i) =>
        <WordItem
          key={`item-${i}`}
          value={tag.word}
          index={i}
          winner={tag.isInCorrectPosition}
        />
      )}
    </ul>
  );
});

export default ListInfo(WordList);
