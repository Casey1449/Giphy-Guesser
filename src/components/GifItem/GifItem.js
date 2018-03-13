import React from "react";
import styles from "./GifItem.scss";
import Spinner from "../Spinner/Spinner";
import ListInfo from "../../containers/ListInfo";
import cx from "classnames";

const GifMask = ({ winner, show }) => {
  return (
    <div
      className={cx(
        styles.gif_mask,
        winner ? styles.winner_true : styles.winner_false
      )}
      style={show ? {} : { display: "none" }}
    >
      <span>{winner ? "+25!" : "X"}</span>
    </div>
  );
};

const GifItem = props => {
  const { answersSubmitted, tags, gifs, index } = props;

  if (gifs.loaded && gifs.results) {
    const gifUrl = gifs.results[index].desktop.url;

    const gifStyle = {
      background: `url(${gifUrl}) no-repeat`,
      backgroundPosition: "center",
      backgroundSize: "contain"
    };

    return (
      <li className={cx(styles.list_item, styles.gif_item)} style={gifStyle}>
        <GifMask
          show={answersSubmitted}
          winner={tags[index].isInCorrectPosition}
        />
      </li>
    );
  }
  if (gifs.loaded && gifs.error) {
    return (
      <li className={cx(styles.list_item, styles.gif_item)}>
        <h1>ERROR :(</h1>
      </li>
    );
  }
  return (
    <li className={cx(styles.list_item, styles.gif_item)}>
      <Spinner />
    </li>
  );
};

export default ListInfo(GifItem);
