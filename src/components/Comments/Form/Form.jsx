import React from "react";
import PropTypes from "prop-types";
import { Form, Field } from "react-final-form";
import clsx from "clsx";
import { Button } from "../../Controls";

import styles from "./Form.less";

const required = value => (value ? undefined : "Обязательное поле");

export const CommentForm = props => {
  const onSubmit = () => {};

  return (
    <Form
      onSubmit={onSubmit}
      render={({ handleSubmit }) => (
        <form className={styles.form} onSubmit={handleSubmit}>
          <Field name="author" validate={required}>
            {({ input, meta }) => (
              <div>
                <input
                  {...input}
                  type="text"
                  placeholder="Автор"
                  className={clsx(
                    styles.input,
                    meta.error && meta.touched && "error"
                  )}
                />
                {meta.error && meta.touched && (
                  <div className="error">{meta.error}</div>
                )}
              </div>
            )}
          </Field>

          <Field name="comment" validate={required}>
            {({ input, meta }) => (
              <div>
                <input
                  {...input}
                  type="text"
                  placeholder="Комментарий"
                  className={clsx(
                    styles.input,
                    meta.error && meta.touched && "error"
                  )}
                />
                {meta.error && meta.touched && (
                  <div className="error">{meta.error}</div>
                )}
              </div>
            )}
          </Field>

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
