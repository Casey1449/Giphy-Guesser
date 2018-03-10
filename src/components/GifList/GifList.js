import React from "react";
import GifItem from "../GifItem/GifItem";
import ListInfo from "../../containers/ListInfo";
import Spinner from "../Spinner/Spinner";
import "./GifList.scss";

const GifList = ({ correctAnswers }) => {
  return correctAnswers && correctAnswers.length ? (
    <ul className="list gif-list">
      {correctAnswers.map((w, i) => <GifItem key={i} index={i} />)}
    </ul>
  ) : (
    <Spinner />
  );
};

export default ListInfo(GifList);
