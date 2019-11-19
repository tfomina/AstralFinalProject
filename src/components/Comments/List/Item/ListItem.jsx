import React from "react";
import PropTypes from "prop-types";

import styles from "./ListItem.less";

export const ListItem = props => {
  const { item } = props;
  const { text, userName } = item;
  return (
    <li className={styles.item}>
      <span className={styles.author}>{userName}</span>
      <span className={styles.text}>
        {text}{" "}
        <span className={styles.delete} title="Удалить комментарий"></span>
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
