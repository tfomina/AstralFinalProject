import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { Link } from "react-router-dom";

import { Button } from "../Controls";
import { ReactComponent as Comment } from "./../../images/comment.svg";
import { ReactComponent as Heart } from "./../../images/heart.svg";
import { ReactComponent as HeartFilled } from "./../../images/heart_filled.svg";

import styles from "./Frame.less";

const HASHTAG_REGEX = new RegExp(/(^|\s)(#[a-z\d-_]+)/gi);

export const Frame = props => {
  const { className, data, isFeedPost } = props;
  const { id, image, text, comments, likes } = data;

  const parseHashtags = () => (
    <p
      className={styles.text}
      dangerouslySetInnerHTML={{
        __html: text
          ? text.replace(
              HASHTAG_REGEX,
              `$1 <span class=${styles.hashtag}>$2 </span>`
            )
          : ""
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
        <Button
          icon={likes && likes.length ? <HeartFilled /> : <Heart />}
          className={styles.button}
          title="Мне нравится!"
        >
          {(likes && likes.length) || "0"}
        </Button>
        {isFeedPost && (
          <Link to={`/post/${id}`}>
            <Button
              icon={<Comment />}
              className={styles.button}
              title="Посмотреть комментарии"
            >
              {(comments && comments.length) || "0"}
            </Button>
          </Link>
        )}
      </div>
    </div>
  );
};

Frame.defaultProps = {
  isFeedPost: true
};

Frame.propTypes = {
  className: PropTypes.string,
  data: PropTypes.exact({
    id: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    comments: PropTypes.array.isRequired,
    likes: PropTypes.array.isRequired
  }),
  isFeedPost: PropTypes.bool
};
