import React from "react";
import clsx from "clsx";

import { Button } from "../Controls";
import { ReactComponent as Comment } from "./../../images/comment.svg";
import { ReactComponent as Heart } from "./../../images/heart.svg";

import styles from "./Frame.less";

export const Frame = props => {
  const { className } = props;
  return (
    <div className={clsx(styles.frame, className)}>
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
        <Button icon={<Heart />} className={styles.button}>
          59
        </Button>
        <Button icon={<Comment />} className={styles.button}>
          4
        </Button>
      </div>
    </div>
  );
};
