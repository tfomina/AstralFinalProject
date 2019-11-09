import React from "react";
import { Form, Field } from "react-final-form";
import { Button, Overlay, Cross } from "../Controls";

import styles from "./SignUp.less";

export const SignUp = props => {
  const { onClose, onToggleForms } = props;
  const onSubmit = () => {};

  const handleRedirectToSignIn = e => {
    e.preventDefault();
    onToggleForms();
  };

  return (
    <Overlay>
      <div className={styles.signUp}>
        <div className={styles.title}>Регистрация</div>
        <Cross className={styles.closeForm} onClick={onClose} />
        <Form
          onSubmit={onSubmit}
          render={({ handleSubmit }) => (
            <form className={styles.signUpForm}>
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
