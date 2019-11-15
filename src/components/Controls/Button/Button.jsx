import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";

import styles from "./Button.less";

export const Button = props => {
  const { className, onClick, icon, title, children } = props;
  return (
    <button
      className={styles.button}
      onClick={onClick}
      className={clsx(styles.button, className)}
      title={title}
    >
      {icon && <span className={styles.icon}>{icon}</span>}
      {children || ""}
    </button>
  );
};

Button.defaultProps = {
  onClick: () => {},
  title: ""
};

Button.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  icon: PropTypes.element,
  title: PropTypes.string
};
