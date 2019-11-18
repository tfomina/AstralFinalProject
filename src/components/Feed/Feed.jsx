import React from "react";
import { useSelector } from "react-redux";

import Frame from "../Frame";

import styles from "./Feed.less";

export const Feed = () => {
  const data = useSelector(state => state.feed);
  return (
    <>
      {data && data.length ? (
        <ul className={styles.feed}>
          {data.map(item => (
            <li key={item.id}>
              <Frame data={item} className={styles.feedFrame} />
            </li>
          ))}
        </ul>
      ) : (
        <div>Нет данных</div>
      )}
    </>
  );
};
