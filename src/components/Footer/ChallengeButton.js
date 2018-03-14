import React from "react";
import cx from "classnames";
import styles from "./Footer.scss";

const ChallengeButton = ({ targetLength, listLength, handleClick }) => (
  <button
    className={cx(
      styles.challenge_button,
      listLength === targetLength && styles.active_true
    )}
    onClick={() => handleClick(targetLength)}
  >
    {targetLength}
  </button>
);

export default ChallengeButton;
