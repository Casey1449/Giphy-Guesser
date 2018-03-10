import React from "react";
import styles from "./Footer.scss";
import FooterContainer from "../../containers/FooterContainer";
import cx from "classnames";

const Footer = ({
  score,
  tags,
  answersSubmitted,
  startClick,
  submitClick,
  newChallengeClick,
  listLength
}) => {
  const tallyScore = () => tags.filter(t => t.isInCorrectPosition).length * 25;

  const handleChallengeUpdate = num => {
    newChallengeClick(num);
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.button_widget}>
        <p className={styles.widget_label}>Choose your challenge level</p>
        <div className={styles.challenge_level}>
          <button
            className={cx(
              styles.challenge_button,
              listLength === 3 && styles.active_true
            )}
            onClick={() => handleChallengeUpdate(3)}
          >
            3
          </button>
          <button
            className={cx(
              styles.challenge_button,
              listLength === 4 && styles.active_true
            )}
            onClick={() => handleChallengeUpdate(4)}
          >
            4
          </button>
          <button
            id={3}
            className={cx(
              styles.challenge_button,
              listLength === 5 && styles.active_true
            )}
            onClick={() => handleChallengeUpdate(5)}
          >
            5
          </button>
        </div>
      </div>
      {answersSubmitted ? (
        <button onClick={() => startClick(listLength)}>Next Round ▸▸</button>
      ) : (
        <button onClick={() => submitClick(tallyScore())}>Submit!</button>
      )}
      <div className={styles.score}>
        <h1 key={"score-key"}>{score || 0}</h1>
      </div>
    </footer>
  );
};

export default FooterContainer(Footer);
