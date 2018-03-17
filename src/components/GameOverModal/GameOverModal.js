import React from "react";
import styles from "./GameOverModal.scss";
import cx from "classnames";
import GameplayContainer from "../../containers/GameplayContainer";

const GameOverModal = ({ gameplay, score }) => {
  return (
    <div
      className={cx(styles.modal_wrapper, !gameplay.isActive && styles.show)}
    >
      <h2>GAME OVER</h2>
      <h1>Your score:</h1>
      <h1 className={styles.score}>{score}</h1>
    </div>
  );
};

export default GameplayContainer(GameOverModal);
