import React from "react";
import WordItem from "../WordItem/WordItem";
import { SortableContainer } from "react-sortable-hoc";
import ListInfo from "../../containers/ListInfo";
import styles from "./WordList.scss";

const WordList = ({ tags, answersSubmitted, correctAnswers }) => (
  <ul className={styles.list}>
    {tags.map((tag, index) => (
      <WordItem
        key={`item-${index}`}
        value={tag.word}
        index={index}
        thisAnswer={correctAnswers[index]}
        winner={tag.isInCorrectPosition}
        roundOver={answersSubmitted}
      />
    ))}
  </ul>
);

export default ListInfo(SortableContainer(WordList));
