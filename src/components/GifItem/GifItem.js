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
  const {
    answersSubmitted,
    tags,
    gifs,
    isFetchingGifs,
    gifLoadError,
    index
  } = props;
  if (!isFetchingGifs && gifLoadError) {
    return (
      <div className={styles.error_msg}>
        <p>{gifLoadError} &nbsp; 😭</p>
      </div>
    );
  }
  if (isFetchingGifs || !gifs[index]) {
    return (
      <li className={cx(styles.list_item, styles.gif_item)}>
        <Spinner />
      </li>
    );
  } else {
    const gifUrl = gifs[index].desktop.url;

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
};

export default ListInfo(GifItem);
