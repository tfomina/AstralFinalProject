import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";

import { List } from "./List/List";
import { CommentForm as Form } from "./Form/Form";

import styles from "./Comments.less";

let fake_comments = [];
for (let i = 0; i < 10; i++) {
  fake_comments.push({
    id: `15bbafe5-d8cb-454e-8709-4c3c526190f${i}`,
    userId: `97bbafe5-d8cb-454e-8709-4c3c526190f${i}`,
    postId: `32bbafe5-d8cb-454e-8709-4c3c526190f${i}`,
    text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  });
}

export const Comments = props => {
  const { className } = props;
  return (
    <div className={clsx(styles.comments, className)}>
      <List comments={fake_comments} />
      <Form />
    </div>
  );
};

Comments.propTypes = {};
