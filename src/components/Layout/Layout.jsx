import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignInAlt, faUserPlus } from "@fortawesome/free-solid-svg-icons";
import SignIn from "./../SignIn";
import SignUp from "./../SignUp";
import { Button } from "../Controls";
import { ReactComponent as Logo } from "./../../images/logo.svg";

import styles from "./Layout.less";

export const Layout = props => {
  const [isSignUpFormVisible, setSignUpFormVisibility] = useState(false);
  const [isSignInFormVisible, setSignInFormVisibility] = useState(false);

  const toggleSignInVisibility = () => {
    setSignInFormVisibility(!isSignInFormVisible);
  };

  const toggleSignUpVisibility = () => {
    setSignUpFormVisibility(!isSignUpFormVisible);
  };

  const toggleForms = () => {
    toggleSignInVisibility();
    toggleSignUpVisibility();
  };

  return (
    <>
      <div className={styles.container}>
        <header>
          <a href="/" className="logo">
            <Logo />
          </a>
          <Button className={styles.signIn} onClick={toggleSignInVisibility}>
            Войти
          </Button>
          <FontAwesomeIcon
            icon={faSignInAlt}
            className={styles.signInIcon}
            onClick={toggleSignInVisibility}
            title="Войти"
          />
          <Button className={styles.signUp} onClick={toggleSignUpVisibility}>
            Зарегистрироваться
          </Button>
          <FontAwesomeIcon
            icon={faUserPlus}
            className={styles.signUpIcon}
            onClick={toggleSignUpVisibility}
            title="Зарегистрироваться"
          />
        </header>
        <main>{props.children}</main>
        <footer>
          <p>&#169; 2019 Copyright</p>
        </footer>
      </div>
      {isSignInFormVisible && (
        <SignIn onClose={toggleSignInVisibility} onToggleForms={toggleForms} />
      )}
      {isSignUpFormVisible && (
        <SignUp onClose={toggleSignUpVisibility} onToggleForms={toggleForms} />
      )}
    </>
  );
};
