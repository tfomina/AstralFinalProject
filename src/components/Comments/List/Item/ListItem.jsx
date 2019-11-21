import React from "react";
import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import { deleteCommentAction } from "./../../../../redux/actions/posts";

import styles from "./ListItem.less";

export const ListItem = props => {
  const dispatch = useDispatch();

  const { item } = props;
  const { id, text, userId, userName, postId } = item;

  const currentUser = useSelector(state => state.users.currentUser) || null;

  const isDeleteVisible = !!currentUser && userId === currentUser.id;

  const deleteComment = () => {
    dispatch(deleteCommentAction({ id, postId, userId }));
  };

  return (
    <li className={styles.item}>
      <span className={styles.author}>{userName}</span>
      <span className={styles.text}>
        {text}
        {isDeleteVisible && (
          <span
            className={styles.delete}
            title="Удалить комментарий"
            onClick={deleteComment}
          ></span>
        )}
      </span>
    </li>
  );
};

ListItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    postId: PropTypes.string.isRequired,
    userId: PropTypes.string.isRequired,
    userName: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
  })
};
