import React from "react";
import Button from "./../Controls";

import styles from "./Post.less";

export const Post = () => (
  <div className={styles.post}>
    <div className={styles.image}>
      <img
        src="./../images/img_1.jpg"
        alt="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        title=""
      />
    </div>
    <p className={styles.text}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    </p>
    <div className={styles.buttonsWrapper}>
      <Button>59</Button>
      <Button>4</Button>
    </div>
  </div>
);
