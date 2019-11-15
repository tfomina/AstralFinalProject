import React from "react";
import PropTypes from "prop-types";
import { ListItem } from "./Item/ListItem";

import styles from "./List.less";

export const List = props => {
  const { comments } = props;

  return (
    <>
      {comments.length ? (
        <ul className={styles.list}>
          {comments.map(item => (
            <ListItem key={item.id} item={item} />
          ))}
        </ul>
      ) : (
        <div>Нет комментариев</div>
      )}
    </>
  );
};

List.defaultProps = {
  comments: []
};

List.propTypes = {
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      postId: PropTypes.string.isRequired,
      userId: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired
    })
  ).isRequired
};
