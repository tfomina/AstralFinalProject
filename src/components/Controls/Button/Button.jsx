import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";

import styles from "./Button.less";

export const Button = props => {
  const { className, onClick, icon, title, children, disabled } = props;
  return (
    <button
      className={styles.button}
      onClick={onClick}
      className={clsx(styles.button, className, disabled && styles.disabled)}
      title={title}
      disabled={disabled}
    >
      {icon && <span className={styles.icon}>{icon}</span>}
      {children || ""}
    </button>
  );
};

Button.defaultProps = {
  onClick: () => {},
  title: "",
  disabled: false
};

Button.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  icon: PropTypes.element,
  title: PropTypes.string,
  disabled: PropTypes.bool
};
