import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";

import styles from "./Button.less";

export const Button = props => {
  const { className, onClick, icon } = props;
  return (
    <button
      className={styles.button}
      onClick={onClick}
      className={clsx(styles.button, className)}
    >
      <span className={styles.icon}>{icon}</span>
      {props.children || ""}
    </button>
  );
};

Button.defaultProps = {
  onClick: () => {}
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  icon: PropTypes.ReactNode
};
