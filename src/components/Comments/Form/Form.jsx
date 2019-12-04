import React from "react";
import PropTypes from "prop-types";
import { Form, Field } from "react-final-form";
import { useSelector, useDispatch } from "react-redux";
import clsx from "clsx";
import { addCommentAction } from "./../../../redux/actions/posts";
import { CreateUUID, required } from "./../../../utils";
import { Button, Error } from "../../Common";

import styles from "./Form.less";

export const CommentForm = props => {
  const dispatch = useDispatch();
  const { postId } = props;

  const currentUser = useSelector(state => state.users.currentUser) || null;
  const { login } = currentUser;

  const onSubmit = (values, { reset }) => {
    const { comment } = values;
    dispatch(
      addCommentAction({
        comment: { id: CreateUUID(), text: comment, userId: currentUser.id },
        postId: postId
      })
    );
    setTimeout(reset, 0);
  };

  return (
    <Form
      onSubmit={onSubmit}
      initialValues={{ author: login }}
      render={({ handleSubmit, form }) => (
        <form
          className={styles.form}
          onSubmit={event => {
            handleSubmit(event);
          }}
        >
          <Field name="author" validate={required}>
            {({ input, meta }) => (
              <div>
                <input
                  {...input}
                  type="text"
                  placeholder="Автор"
                  readOnly
                  className={clsx(
                    styles.input,
                    meta.error && meta.touched && "error"
                  )}
                />
                {meta.error && meta.touched && (
                  <Error className={styles.error}>{meta.error}</Error>
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
                  <Error className={styles.error}>{meta.error}</Error>
                )}
              </div>
            )}
          </Field>

          <div className={styles.buttons}>
            <Button className={styles.sibmit} type="submit">
              Отправить
            </Button>
            <Button className={styles.cancel} onClick={form.reset}>
              Отменить
            </Button>
          </div>
        </form>
      )}
    />
  );
};

CommentForm.propTypes = {
  postId: PropTypes.string.isRequired
};
