import React from "react";
import styles from "./WordItem.scss";
import cx from "classnames";
import { SortableElement } from "react-sortable-hoc";

const WordItem = SortableElement(
  ({ value, winner, index, roundOver, thisAnswer }) => {
    if (roundOver) {
      return (
        <li className={styles.list_item}>
          <div className={styles.word_arrow}>
            {winner ? (
              <p>{value}</p>
            ) : (
              <div
                style={{
                  textAlign: "center",
                  padding: "0px 5px",
                  marginBottom: "5%"
                }}
              >
                <p
                  className={styles.answer_arrow}
                  style={{
                    color: "#f66",
                    textDecoration: "line-through",
                    marginBottom: "0%"
                  }}
                >
                  {value}
                </p>
                <p className={styles.answer_arrow}>{thisAnswer}</p>
              </div>
            )}
          </div>
        </li>
      );
    } else {
      return (
        <li className={cx(styles.list_item, styles.word_item)}>
          <div className={styles.word_arrow}>
            <p>{value}</p>
          </div>
        </li>
      );
    }
  }
);

export default WordItem;
