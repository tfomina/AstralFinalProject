import React from "react";

import Frame from "../Frame";

import styles from "./List.less";

export const List = () => (
  <ul className={styles.list}>
    <li>
      <Frame className={styles.frame} />
    </li>
    <li>
      <Frame className={styles.frame} />
    </li>
    <li>
      <Frame className={styles.frame} />
    </li>
    <li>
      <Frame className={styles.frame} />
    </li>
    <li>
      <Frame className={styles.frame} />
    </li>
  </ul>
);
