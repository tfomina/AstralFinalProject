import React from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { Form, Field } from "react-final-form";
import clsx from "clsx";
import { signInAction } from "./../../redux/actions/users";
import { required } from "./../../utils";
import { Button, Overlay, Close, Error } from "../Common";

import styles from "./SignIn.less";

const initialUser = {
  login: "",
  password: ""
};

export const SignIn = props => {
  const { toggleSignInVisibility, onToggleForms } = props;

  const dispatch = useDispatch();

  const onSubmit = values => {
    dispatch(signInAction(values));
    toggleSignInVisibility();
  };

  const handleRedirectToSignUp = e => {
    e.preventDefault();
    onToggleForms();
  };

  const onClose = () => {
    toggleSignInVisibility();
  };

  return (
    <Overlay>
      <div className={styles.signIn}>
        <div className={styles.title}>Вход</div>
        <Close className={styles.closeForm} onClick={onClose} />
        <Form
          onSubmit={onSubmit}
          initialValues={initialUser}
          render={({ handleSubmit }) => (
            <form className={styles.signInForm} onSubmit={handleSubmit}>
              <Field name="login" validate={required}>
                {({ input, meta }) => (
                  <div>
                    <input
                      {...input}
                      type="text"
                      placeholder="Имя пользователя или email"
                      className={clsx(
                        styles.input,
                        meta.error && meta.touched && "error"
                      )}
                    />
                    {meta.error && meta.touched && <Error>{meta.error}</Error>}
                  </div>
                )}
              </Field>

              <Field name="password" validate={required}>
                {({ input, meta }) => (
                  <div>
                    <input
                      {...input}
                      type="password"
                      placeholder="Пароль"
                      className={clsx(
                        styles.input,
                        meta.error && meta.touched && "error"
                      )}
                    />
                    {meta.error && meta.touched && <Error>{meta.error}</Error>}
                  </div>
                )}
              </Field>
              <Button className={styles.sibmit} type="submit">
                Войти
              </Button>
            </form>
          )}
        />
        <div className={styles.text}>
          Нет аккаунта?&nbsp;
          <a
            href="#"
            className={styles.redirectLink}
            onClick={handleRedirectToSignUp}
          >
            Зарегистрируйтесь
          </a>
        </div>
      </div>
    </Overlay>
  );
};

SignIn.propTypes = {
  toggleSignInVisibility: PropTypes.func.isRequired,
  onToggleForms: PropTypes.func.isRequired
};
