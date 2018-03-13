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

const GifItem = ({ answersSubmitted, tags, gifs, index }) => {
  if (gifs.loaded) {
    const gifUrl = gifs.results[index].desktop.url;

    const gifStyle = {
      background: `url(${gifUrl}) no-repeat`,
      backgroundPosition: "center",
      backgroundSize: "contain"
    };

    return (
      <li className={styles.list_item} style={gifStyle}>
        <GifMask
          show={answersSubmitted}
          winner={tags[index].isInCorrectPosition}
        />
      </li>
    );
  }

  if (gifs.error) {
    return (
      <li className={styles.list_item}>
        <h1>ERROR :(</h1>
      </li>
    );
  }

  return (
    <li className={styles.list_item}>
      <Spinner />
    </li>
  );
};

export default ListInfo(GifItem);
