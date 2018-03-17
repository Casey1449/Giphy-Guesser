import React from "react";
import "./Header.scss";
import styles from "./Header.scss";
import cx from "classnames";
import GameplayContainer from "../../containers/GameplayContainer";

const Header = ({ gameplay }) => {
  const { lastRound, currentRound } = gameplay;
  const roundsRemaining = lastRound - currentRound + 1;
  return (
    <header>
      <h1>GIPHY GUESSER</h1>
      <div className={styles.round_countdown}>
        <p>
          Rounds remaining: &nbsp;
          <span
            className={cx(
              styles.rounds_remaining,
              roundsRemaining === 1 && styles.last_round
            )}
          >
            {roundsRemaining}
          </span>
        </p>
      </div>
      <div className={styles.header_stripe} />
    </header>
  );
};

export default GameplayContainer(Header);
