import { connect } from "react-redux";
import { updateTags } from "../redux/actions/index.js";

const mapStateToProps = ({ tags, gameplay, gifs, correctAnswers }) => ({
  correctAnswers,
  tags,
  gameplay,
  gifs
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
