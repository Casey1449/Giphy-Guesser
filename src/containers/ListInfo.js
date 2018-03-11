import { connect } from "react-redux";
import { updateTags } from "../actions/index.js";

const mapStateToProps = ({
  tags,
  answersSubmitted,
  gifs,
  isFetchingGifs,
  correctAnswers,
  gifLoadError
}) => ({
  tags,
  answersSubmitted,
  gifs,
  isFetchingGifs,
  correctAnswers,
  gifLoadError
});

const mapDispatchToProps = dispatch => {
  return {
    onSortEnd: ({ oldIndex, newIndex }) => {
      dispatch(updateTags(oldIndex, newIndex));
    }
  };
};

const ListInfo = connect(mapStateToProps, mapDispatchToProps);

export default ListInfo;
