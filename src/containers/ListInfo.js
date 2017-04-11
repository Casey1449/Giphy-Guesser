import { connect } from 'react-redux';
import { updateTags } from '../actions/index.js';

const mapStateToProps = (state) => {
  const { tags, answersSubmitted, gifs, isFetchingGifs } = state;
  return {
    tags,
    answersSubmitted,
    gifs,
    isFetchingGifs
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onSortEnd: ({oldIndex, newIndex}) => {
      dispatch(updateTags(oldIndex, newIndex));
    }
  };
};

const ListInfo = connect(
  mapStateToProps,
  mapDispatchToProps
);

export default ListInfo;
