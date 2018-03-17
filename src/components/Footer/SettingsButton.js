import React from "react";
import cx from "classnames";
import styles from "./Footer.scss";

const SettingsButton = ({ active, children, value, handleClick, disabled }) => (
  <button
    disabled={disabled}
    title={value}
    className={cx(styles.settings_button, active && styles.active_true)}
    onClick={() => handleClick(value)}
  >
    {children || value}
  </button>
);

export default SettingsButton;
