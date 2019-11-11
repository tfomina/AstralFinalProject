import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";

import styles from "./Button.less";

export const Button = props => {
  const { className, onClick, icon, children } = props;
  return (
    <button
      className={styles.button}
      onClick={onClick}
      className={clsx(styles.button, className)}
    >
      {icon && <span className={styles.icon}>{icon}</span>}
      {children || ""}
    </button>
  );
};

Button.defaultProps = {
  onClick: () => {}
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  icon: PropTypes.element
};
