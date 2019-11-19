import React from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { Form, Field } from "react-final-form";
import { signUpAction } from "./../../redux/actions/users";
import { CreateUUID } from "./../../utils";
import { Button, Overlay, Cross } from "../Controls";

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
    const { name, login, email, password } = values;
    if (!name || !login || !email || !password) {
      alert("Заполнены не все поля!");
      return;
    }

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
              <Field
                name="name"
                component="input"
                placeholder="Полное имя"
                className={styles.input}
              />

              <Field
                name="login"
                component="input"
                placeholder="Имя пользователя"
                className={styles.input}
              />

              <Field
                name="email"
                component="input"
                placeholder="Email"
                className={styles.input}
              />
              <Field
                name="password"
                component="input"
                type="password"
                placeholder="Пароль"
                className={styles.input}
              />
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
