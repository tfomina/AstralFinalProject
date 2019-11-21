import React from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { Form, Field } from "react-final-form";
import clsx from "clsx";
import { signUpAction } from "./../../redux/actions/users";
import {
  CreateUUID,
  required,
  composeValidators,
  mustBeValidEmail,
  setItemInLocalStorage
} from "./../../utils";
import { Button, Overlay, Close, Error } from "../Common";

import styles from "./SignUp.less";

const initialUser = {
  id: "",
  name: "",
  login: "",
  email: "",
  password: ""
};

export const SignUp = props => {
  const { toggleSignUpVisibility, onToggleForms } = props;

  const dispatch = useDispatch();

  const onSubmit = values => {
    const user = { ...values, id: CreateUUID() };
    setItemInLocalStorage("currentUser", user);
    dispatch(signUpAction(user));
    toggleSignUpVisibility();
  };

  const handleRedirectToSignIn = e => {
    e.preventDefault();
    onToggleForms();
  };

  const onClose = () => {
    toggleSignUpVisibility();
  };

  return (
    <Overlay>
      <div className={styles.signUp}>
        <div className={styles.title}>Регистрация</div>
        <Close className={styles.closeForm} onClick={onClose} />
        <Form
          onSubmit={onSubmit}
          initialValues={initialUser}
          render={({ handleSubmit }) => (
            <form className={styles.signUpForm} onSubmit={handleSubmit}>
              <Field name="name" validate={required}>
                {({ input, meta }) => (
                  <div>
                    <input
                      {...input}
                      type="text"
                      placeholder="Полное имя"
                      className={clsx(
                        styles.input,
                        meta.error && meta.touched && "error"
                      )}
                    />
                    {meta.error && meta.touched && <Error>{meta.error}</Error>}
                  </div>
                )}
              </Field>

              <Field name="login" validate={required}>
                {({ input, meta }) => (
                  <div>
                    <input
                      {...input}
                      type="text"
                      placeholder="Имя пользователя"
                      className={clsx(
                        styles.input,
                        meta.error && meta.touched && "error"
                      )}
                    />
                    {meta.error && meta.touched && <Error>{meta.error}</Error>}
                  </div>
                )}
              </Field>

              <Field
                name="email"
                validate={composeValidators(required, mustBeValidEmail)}
              >
                {({ input, meta }) => (
                  <div>
                    <input
                      {...input}
                      type="text"
                      placeholder="Email"
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
                Зарегистрироваться
              </Button>
            </form>
          )}
        />
        <div className={styles.text}>
          Уже зарегистрированы?&nbsp;
          <a
            href="#"
            className={styles.redirectLink}
            onClick={handleRedirectToSignIn}
          >
            Войдите
          </a>
        </div>
      </div>
    </Overlay>
  );
};

SignUp.propTypes = {
  toggleSignUpVisibility: PropTypes.func.isRequired,
  onToggleForms: PropTypes.func.isRequired
};
