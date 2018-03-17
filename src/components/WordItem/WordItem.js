import React from "react";
import styles from "./WordItem.scss";
import cx from "classnames";
import { SortableElement } from "react-sortable-hoc";

const AnswerText = ({ value, incorrect }) => {
  return (
    <div className={cx(styles.answer_text, incorrect && styles.incorrect)}>
      <p>{value}</p>
    </div>
  );
};

const WordItem = ({ value, winner, roundOver, thisAnswer }) => {
  if (roundOver) {
    return (
      <li className={styles.list_item}>
        <div className={styles.word_arrow}>
          <AnswerText value={value} incorrect={!winner} />
          {!winner && <AnswerText value={thisAnswer} />}
        </div>
      </li>
    );
  } else {
    return (
      <li className={cx(styles.list_item, styles.word_item)}>
        <div className={styles.word_arrow}>
          <AnswerText value={value} />
        </div>
      </li>
    );
  }
};

export default SortableElement(WordItem);
