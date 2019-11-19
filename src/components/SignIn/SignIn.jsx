import React from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { Form, Field } from "react-final-form";
import { Button, Overlay, Cross } from "../Controls";
import { signInAction } from "./../../redux/actions/users";

import styles from "./SignIn.less";

const initialUser = {
  login: "",
  password: ""
};

export const SignIn = props => {
  const { toggleSignInVisibility, onToggleForms } = props;

  const dispatch = useDispatch();

  const onSubmit = values => {
    const { login, password } = values;
    if (!login || !password) {
      alert("Заполнены не все поля!");
      return;
    }

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
        <Cross className={styles.closeForm} onClick={onClose} />
        <Form
          onSubmit={onSubmit}
          initialValues={initialUser}
          render={({ handleSubmit }) => (
            <form className={styles.signInForm} onSubmit={handleSubmit}>
              <Field
                name="login"
                component="input"
                placeholder="Имя пользователя или email"
                className={styles.input}
              />

              <Field
                name="password"
                component="input"
                type="password"
                placeholder="Пароль"
                className={styles.input}
              />
              <Button className={styles.sibmit}>Войти</Button>
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
