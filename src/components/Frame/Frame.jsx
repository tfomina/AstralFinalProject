import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";

import { Button } from "../Controls";
import { ReactComponent as Comment } from "./../../images/comment.svg";
import { ReactComponent as Heart } from "./../../images/heart.svg";

import styles from "./Frame.less";

const HASHTAG_REGEX = new RegExp(/(^|\s)(#[a-z\d-_]+)/gi);

export const Frame = props => {
  const { className, id, image, text, comments, likes } = props;

  const parseHashtags = () => (
    <p
      className={styles.text}
      dangerouslySetInnerHTML={{
        __html: text.replace(
          HASHTAG_REGEX,
          `$1 <span class=${styles.hashtag}>$2 </span>`
        )
      }}
    />
  );

  return (
    <div className={clsx(styles.frame, className)}>
      <div className={styles.image}>
        <img src={image} alt={text} />
      </div>
      {parseHashtags()}
      <div className={styles.buttonsWrapper}>
        <Button icon={<Heart />} className={styles.button}>
          {likes}
        </Button>
        <Button icon={<Comment />} className={styles.button}>
          {comments}
        </Button>
      </div>
    </div>
  );
};

// TODO: удалить, когда появятся настоящие данные
Frame.defaultProps = {
  id: "97bbafe5-d8cb-454e-8709-4c3c526190f0",
  image: "./../images/img_1.jpg",
  text:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit #hashtag #frame #image",
  comments: 5,
  likes: 12
};

Frame.propTypes = {
  id: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  comments: PropTypes.number.isRequired,
  likes: PropTypes.number.isRequired
};
