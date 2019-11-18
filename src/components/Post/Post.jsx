import React from "react";
import Frame from "../Frame";
import Comments from "../Comments";

import styles from "./Post.less";

const data = {
  id: `97bbafe5-d8cb-454e-8709-4c3c526190f0`,
  image: "./../images/img_1.jpg",
  text:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit #hashtag #frame #image",
  comments: 15,
  likes: 12
};

export const Post = () => (
  <div className={styles.post}>
    <Frame
      data={data}
      className={styles.postFrame}
      isCommentButtonVisible={false}
    />
    <Comments className={styles.postComments} />
  </div>
);
