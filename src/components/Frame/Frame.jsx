import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";
import clsx from "clsx";

import { Button } from "../Common";
import { ReactComponent as Comment } from "./../../images/comment.svg";
import { ReactComponent as Heart } from "./../../images/heart.svg";
import { ReactComponent as HeartFilled } from "./../../images/heart_filled.svg";

import styles from "./Frame.less";

const HASHTAG_REGEX = new RegExp(/(^|\s)(#[a-z\d-_]+)/gi);

export const Frame = props => {
  const { className, data, isFeedPost } = props;
  const { id, image, text, comments, likes } = data;

  const currentUser = useSelector(state => state.users.currentUser) || null;

  const parseHashtags = () => (
    <p
      className={clsx(styles.text, !isFeedPost && styles.fullWidth)}
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

  const renderLikesButton = () => (
    <Button
      icon={
        (!likes && !likes.length) || !currentUser ? <Heart /> : <HeartFilled />
      }
      className={clsx(styles.button, !isFeedPost && styles.fullWidth)}
      title={
        !!currentUser
          ? "Мне нравится!"
          : "Войдите или зарегистрируйтесь, чтобы поставить лайк"
      }
      disabled={!currentUser}
    >
      {(likes && likes.length) || "0"}
    </Button>
  );

  const commentsButton = (
    <Button
      icon={<Comment />}
      className={clsx(styles.button, !isFeedPost && styles.fullWidth)}
      title={isFeedPost ? "Посмотреть комментарии" : ""}
      disabled={!isFeedPost}
    >
      {(comments && comments.length) || "0"}
    </Button>
  );

  const renderCommentsButton = () =>
    isFeedPost ? (
      <Link to={`/post/${id}`}>{commentsButton}</Link>
    ) : (
      commentsButton
    );

  return (
    <div className={clsx(styles.frame, className)}>
      <div className={styles.image}>
        <img src={image} alt={text} />
      </div>
      {parseHashtags()}
      <div className={styles.buttonsWrapper}>
        {renderLikesButton()}
        {renderCommentsButton()}
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
