import { connect } from "react-redux";
import { updateTags } from "../redux/actions/index.js";

const mapStateToProps = ({
  tags,
  answersSubmitted,
  gifs,
  isFetchingGifs,
  correctAnswers
}) => ({
  correctAnswers,
  tags,
  answersSubmitted,
  gifs,
  isFetchingGifs
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
