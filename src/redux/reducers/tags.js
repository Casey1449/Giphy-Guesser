import { evaluateTagPositions } from "../utils.js";
import { arrayMove } from "react-sortable-hoc";

const tags = (state = [], action) => {
  switch (action.type) {
    case "START_NEXT_ROUND":
      return action.newTags;
    case "UPDATE_TAGS":
      return evaluateTagPositions(
        arrayMove(state, action.oldIndex, action.newIndex)
      );
    default:
      return state;
  }
};

export default tags;
