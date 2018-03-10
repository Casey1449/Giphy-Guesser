import React from "react";
import "./Header.scss";
import styles from "./Header.scss";

export default () => (
  <header>
    <h1>GIPHY GUESSER</h1>
    <div className={styles.header_stripe} />
  </header>
);
