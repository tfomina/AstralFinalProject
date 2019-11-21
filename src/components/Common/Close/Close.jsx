import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";

import styles from "./Close.less";

export const Close = ({ className, onClick }) => (
  <div className={clsx(styles.close, className)} onClick={onClick}></div>
);

Close.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func.isRequired
};
