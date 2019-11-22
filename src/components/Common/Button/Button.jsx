import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";

import styles from "./Button.less";

export const Button = props => {
  const { className, onClick, icon, title, children, disabled, type } = props;
  return (
    <button
      className={clsx(styles.button, className, disabled && styles.disabled)}
      title={title}
      disabled={disabled}
      type={type}
      onClick={onClick}
    >
      {icon && <span className={styles.icon}>{icon}</span>}
      {children || ""}
    </button>
  );
};

Button.defaultProps = {
  onClick: () => {},
  title: "",
  disabled: false,
  type: "button"
};

Button.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  icon: PropTypes.element,
  title: PropTypes.string,
  disabled: PropTypes.bool,
  children: PropTypes.node,
  type: PropTypes.string
};
