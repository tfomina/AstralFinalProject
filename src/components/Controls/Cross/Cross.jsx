import React from "react";
import clsx from "clsx";

import styles from "./Cross.less";

export const Cross = ({ className, onClick }) => (
  <div className={clsx(styles.cross, className)} onClick={onClick}></div>
);
