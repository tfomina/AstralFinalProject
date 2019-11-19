import React from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { Form, Field } from "react-final-form";
import clsx from "clsx";
import { signUpAction } from "./../../redux/actions/users";
import { CreateUUID, isEmailValid } from "./../../utils";
import { Button, Overlay, Cross } from "../Controls";

import styles from "./SignUp.less";

const initialUser = {
  id: "",
  name: "",
  login: "",
  email: "",
  password: ""
};

const required = value => (value ? undefined : "Обязательное поле");
const mustBeValidEmail = value =>
  isEmailValid(value) ? undefined : "Невалидный email";

const composeValidators = (...validators) => value =>
  validators.reduce((error, validator) => error || validator(value), undefined);

export const SignUp = props => {
  const { toggleSignUpVisibility, onToggleForms } = props;

  const dispatch = useDispatch();

  const onSubmit = values => {
    const user = { ...values, id: CreateUUID() };
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
        <Cross className={styles.closeForm} onClick={onClose} />
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
                    {meta.error && meta.touched && (
                      <div className="error">{meta.error}</div>
                    )}
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
                    {meta.error && meta.touched && (
                      <div className="error">{meta.error}</div>
                    )}
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
                    {meta.error && meta.touched && (
                      <div className="error">{meta.error}</div>
                    )}
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
                    {meta.error && meta.touched && (
                      <div className="error">{meta.error}</div>
                    )}
                  </div>
                )}
              </Field>

              <Button className={styles.sibmit}>Зарегистрироваться</Button>
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
