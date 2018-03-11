import React from "react";
import WordItem from "../WordItem/WordItem";
import { SortableContainer } from "react-sortable-hoc";
import ListInfo from "../../containers/ListInfo";
import styles from "./WordList.scss";

const WordList = SortableContainer(
  ({ tags, answersSubmitted, correctAnswers }) => (
    <ul className={styles.list}>
      {tags.map((tag, i) => (
        <WordItem
          key={`item-${i}`}
          value={tag.word}
          index={i}
          thisAnswer={correctAnswers[i]}
          winner={tag.isInCorrectPosition}
          roundOver={answersSubmitted}
        />
      ))}
    </ul>
  )
);

export default ListInfo(WordList);
