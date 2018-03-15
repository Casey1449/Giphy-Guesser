import React from "react";
import "./Header.scss";
import styles from "./Header.scss";
import GoogleBtn from "../GoogleBtn/GoogleBtn.js";

export default () => (
  <header>
    <h1>GIPHY GUESSER</h1>
    <GoogleBtn />
    <div className={styles.header_stripe} />
  </header>
);
