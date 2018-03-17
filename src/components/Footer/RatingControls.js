import React from "react";
import styles from "./Footer.scss";
import SettingsButton from "./SettingsButton";
import RatingControlsContainer from "../../containers/RatingControlsContainer";

const RatingControls = ({ gifRating, updateGifRating, disabled }) => {
  const ratings = ["y", "g", "pg", "pg-13", "r"];
  return (
    <div className={styles.button_widget}>
      <p className={styles.widget_label}>Choose your appropriateness level</p>
      <div className={styles.challenge_level}>
        {ratings.map(rating => (
          <SettingsButton
            disabled={disabled}
            key={rating}
            value={rating}
            active={gifRating === rating}
            handleClick={updateGifRating}
          >
            {rating === "pg-13" ? "13" : rating.toUpperCase()}
          </SettingsButton>
        ))}
      </div>
    </div>
  );
};

export default RatingControlsContainer(RatingControls);
