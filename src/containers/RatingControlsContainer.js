import { connect } from "react-redux";
import { updateGifRating } from "../redux/actions/settingsActions.js";

const RatingControlsContainer = connect(
  ({ gifRating }) => ({
    gifRating
  }),
  { updateGifRating }
);

export default RatingControlsContainer;
