import React from "react";
import Post from "./../Post";

import styles from "./List.less";

export const List = () => (
  <ul className={styles.list}>
    Список
    <br />
    <Post /> <Post /> <Post />
  </ul>
);
