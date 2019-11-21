import React from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import clsx from "clsx";

import { List } from "./List/List";
import { CommentForm as Form } from "./Form/Form";

import styles from "./Comments.less";

export const Comments = props => {
  const { className, data } = props;

  const currentUser = useSelector(state => state.users.currentUser) || null;
  const users = useSelector(state => state.users.users) || [];

  const comments = data.comments.map(c => ({
    ...c,
    userName: users.find(u => u.id === c.userId).name,
    postId: data.id
  }));

  return (
    <div className={clsx(styles.comments, className)}>
      <List comments={comments} />
      {currentUser && <Form postId={data.id} />}
    </div>
  );
};

Comments.propTypes = {
  data: PropTypes.exact({
    id: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    comments: PropTypes.array.isRequired,
    likes: PropTypes.array.isRequired
  })
};
