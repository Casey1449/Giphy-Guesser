import React from "react";
import styles from "./Footer.scss";
import FooterContainer from "../../containers/FooterContainer";
import SettingsButton from "./SettingsButton";
import RatingControls from "./RatingControls";

const SubmitButton = ({
  gameplay,
  startClick,
  listLength,
  submitClick,
  newGameClick,
  tags
}) => {
  const tallyScore = () => tags.filter(t => t.isInCorrectPosition).length * 25;

  if (gameplay.isActive && gameplay.answersSubmitted) {
    return (
      <button onClick={() => startClick(listLength)}>Next Round ▸▸</button>
    );
  }

  if (!gameplay.isActive) {
    return (
      <button onClick={() => newGameClick(listLength)}>Play Again?</button>
    );
  }

  return <button onClick={() => submitClick(tallyScore())}>Submit!</button>;
};

const Footer = ({
  tags,
  gameplay,
  score,
  startClick,
  submitClick,
  newGameClick,
  newChallengeClick,
  listLength
}) => {
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
              disabled={gameplay.isActive}
              value={3}
              active={listLength === 3}
              handleClick={handleChallengeUpdate}
            />
            <SettingsButton
              disabled={gameplay.isActive}
              value={4}
              active={listLength === 4}
              handleClick={handleChallengeUpdate}
            />
            <SettingsButton
              disabled={gameplay.isActive}
              value={5}
              active={listLength === 5}
              handleClick={handleChallengeUpdate}
            />
          </div>
        </div>
        <RatingControls disabled={gameplay.isActive} />
      </div>
      <SubmitButton
        {...{
          gameplay,
          newGameClick,
          startClick,
          listLength,
          submitClick,
          tags
        }}
      />
      <div className={styles.score}>
        <h1 key={"score-key"}>{score || 0}</h1>
      </div>
    </footer>
  );
};

export default FooterContainer(Footer);
