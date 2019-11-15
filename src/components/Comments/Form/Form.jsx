import React from "react";
import PropTypes from "prop-types";
import { Form, Field } from "react-final-form";
import { Button } from "../../Controls";

import styles from "./Form.less";

export const CommentForm = props => {
  const onSubmit = () => {};

  return (
    <Form
      onSubmit={onSubmit}
      render={({ handleSubmit }) => (
        <form className={styles.form}>
          <Field
            name="author"
            component="input"
            placeholder="Автор"
            className={styles.input}
          />

          <Field
            name="comment"
            component="input"
            placeholder="Комментарий"
            className={styles.input}
          />

          <div className={styles.buttons}>
            <Button className={styles.sibmit}>Отправить</Button>
            <Button className={styles.cancel}>Отменить</Button>
          </div>
        </form>
      )}
    />
  );
};

CommentForm.propTypes = {};
