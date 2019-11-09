import React from "react";

import styles from "./Overlay.less";

export const Overlay = props => (
  <div className={styles.overlay}>{props.children}</div>
);
