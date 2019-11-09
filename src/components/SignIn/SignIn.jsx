import React from "react";
import { Form, Field } from "react-final-form";
import { Button, Overlay, Cross } from "../Controls";

import styles from "./SignIn.less";

export const SignIn = props => {
  const { onClose, onToggleForms } = props;
  const onSubmit = () => {};

  const handleRedirectToSignUp = e => {
    e.preventDefault();
    onToggleForms();
  };

  return (
    <Overlay>
      <div className={styles.signIn}>
        <div className={styles.title}>Вход</div>
        <Cross className={styles.closeForm} onClick={onClose} />
        <Form
          onSubmit={onSubmit}
          render={({ handleSubmit }) => (
            <form className={styles.signInForm}>
              <Field
                name="name"
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
