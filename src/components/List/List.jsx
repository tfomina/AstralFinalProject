import React from "react";

import Frame from "../Frame";

import styles from "./List.less";

let fake_data = [];
for (let i = 0; i < 10; i++) {
  fake_data.push({
    id: `97bbafe5-d8cb-454e-8709-4c3c526190f${i}`,
    image: "./../images/img_1.jpg",
    text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit #hashtag #frame #image",
    comments: i + 1 + (i % 2) + (i % 3),
    likes: 12
  });
}

export const List = () => (
  <>
    {fake_data.length && (
      <ul className={styles.list}>
        {fake_data.map(item => (
          <li key={item.id}>
            <Frame data={item} className={styles.listFrame} />
          </li>
        ))}
      </ul>
    )}
  </>
);
