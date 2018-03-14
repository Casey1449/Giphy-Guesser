import React from "react";
import styles from "./Footer.scss";
import FooterContainer from "../../containers/FooterContainer";
import ChallengeButton from "./ChallengeButton";

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
          <ChallengeButton
            targetLength={3}
            listLength={listLength}
            handleClick={handleChallengeUpdate}
          />
          <ChallengeButton
            targetLength={4}
            listLength={listLength}
            handleClick={handleChallengeUpdate}
          />
          <ChallengeButton
            targetLength={5}
            listLength={listLength}
            handleClick={handleChallengeUpdate}
          />
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
