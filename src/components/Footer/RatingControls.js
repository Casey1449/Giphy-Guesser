import { React, PropTypes } from "react";
import cx from "classnames";
import styles from "./Footer.scss";
import SettingsButton from "./SettingsButton";
import RatingControlsContainer from "../../containers/RatingControlsContainer";

const RatingControls = ({ gifRating, updateGifRating }) => {
  const ratings = ["y", "g", "pg", "pg-13", "r"];
  return (
    <div className={styles.button_widget}>
      <p className={styles.widget_label}>Choose your appropriateness level</p>
      <div className={styles.challenge_level}>
        {ratings.map(rating => (
          <SettingsButton
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

RatingControls.propTypes = {
  gifRating: PropTypes.string.isRequired,
  updateGifRating: PropTypes.function.isRequired
};
// export default RatingControls;
export default RatingControlsContainer(RatingControls);
