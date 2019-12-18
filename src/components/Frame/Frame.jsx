import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import clsx from "clsx";
import { toggleLikeAction } from "./../../redux/actions/posts";
import PropTypes from "prop-types";

import { Button } from "../Common";
import { ReactComponent as Comment } from "./../../images/comment.svg";
import { ReactComponent as Heart } from "./../../images/heart.svg";
import { ReactComponent as HeartFilled } from "./../../images/heart_filled.svg";
import { ReactComponent as HeartBig } from "./../../images/heart_big.svg";

import styles from "./Frame.less";

const HASHTAG_REGEX = new RegExp(/(^|\s)(#[a-z\d-_]+)/gi);

export const Frame = props => {
  const [isLikeCounterVisible, setLikeCounterVisibility] = useState(false);

  const dispatch = useDispatch();
  const {
    className,
    isFeedPost,
    data: { id, image, text, comments, likes }
  } = props;

  const currentUser = useSelector(state => state.users.currentUser) || null;

  const toggleLike = () => {
    dispatch(toggleLikeAction({ postId: id, currentUserId: currentUser.id }));
    setLikeCounterVisibility(true);
    setTimeout(() => setLikeCounterVisibility(false), 700);
  };

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

  const renderLikeIcon = () =>
    !likes ||
    !likes.length ||
    !currentUser ||
    (currentUser && likes.findIndex(l => l.userId === currentUser.id)) == -1 ? (
      <Heart />
    ) : (
      <HeartFilled />
    );

  const renderLikesButton = () => (
    <Button
      icon={renderLikeIcon()}
      className={clsx(styles.button, !isFeedPost && styles.fullWidth)}
      title={
        !!currentUser
          ? "Мне нравится!"
          : "Войдите или зарегистрируйтесь, чтобы поставить лайк"
      }
      disabled={!currentUser}
      onClick={toggleLike}
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
        <div
          className={clsx(
            styles.likeCounter,
            isLikeCounterVisible && styles.visible
          )}
        >
          <HeartBig />
          <span className={styles.count}>{likes && likes.length}</span>
        </div>
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
  isFeedPost: false
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
