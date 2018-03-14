import React from "react";
import styles from "./Footer.scss";
import FooterContainer from "../../containers/FooterContainer";
import SettingsButton from "./SettingsButton";
import RatingControls from "./RatingControls";

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
      <div className={styles.game_settings}>
        <div className={styles.button_widget}>
          <p className={styles.widget_label}>Choose your challenge level</p>
          <div className={styles.challenge_level}>
            <SettingsButton
              value={3}
              active={listLength === 3}
              handleClick={handleChallengeUpdate}
            />
            <SettingsButton
              value={4}
              active={listLength === 4}
              handleClick={handleChallengeUpdate}
            />
            <SettingsButton
              value={5}
              active={listLength === 5}
              handleClick={handleChallengeUpdate}
            />
          </div>
        </div>
        <RatingControls />
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
