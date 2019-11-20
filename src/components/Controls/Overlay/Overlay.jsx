import React from "react";
import PropTypes from "prop-types";

import styles from "./Overlay.less";

export const Overlay = props => (
  <div className={styles.overlay}>{props.children}</div>
);

Overlay.propTypes = {
  children: PropTypes.node
};
