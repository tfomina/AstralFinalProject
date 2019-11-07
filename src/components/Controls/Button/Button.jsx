import React from "react";
import PropTypes from "prop-types";

import styles from "./Button.less";

export const Button = props => {
  const { color, backgroundColor } = props;

  return (
    <button
      className={styles.button}
      style={{ color: color, backgroundColor: backgroundColor }}
    >
      {props.children || ""}
    </button>
  );
};

Button.defaultProps = {
  color: "#07319D",
  backgroundColor: "#fff"
};

Button.propTypes = {
  color: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string.isRequired
};
