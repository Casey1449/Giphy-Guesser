import React from "react";
import styles from "./Spinner.scss";

export default () => (
  <div className={styles.spin_wrapper}>
    <div className={styles.spinner} />
  </div>
);
