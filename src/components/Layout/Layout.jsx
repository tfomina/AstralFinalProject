import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSignInAlt,
  faUserPlus,
  faSignOutAlt
} from "@fortawesome/free-solid-svg-icons";
import SignIn from "./../SignIn";
import SignUp from "./../SignUp";
import { Button } from "../Common";
import { ReactComponent as Logo } from "./../../images/logo.svg";
import { signOutAction } from "./../../redux/actions/users";
import { removeItemFromLocalStorage } from "./../../utils";

import styles from "./Layout.less";

export const Layout = props => {
  const [isSignUpFormVisible, setSignUpFormVisibility] = useState(false);
  const [isSignInFormVisible, setSignInFormVisibility] = useState(false);

  const dispatch = useDispatch();
  const currentUser = useSelector(state => state.users.currentUser) || null;

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

  const signOut = () => {
    removeItemFromLocalStorage("currentUser");
    dispatch(signOutAction());
  };

  const renderButtons = () =>
    currentUser ? (
      <>
        <Button className={styles.signOut} onClick={signOut}>
          Выйти
        </Button>
        <FontAwesomeIcon
          icon={faSignOutAlt}
          className={styles.signOutIcon}
          onClick={signOut}
          title="Выйти"
        />
      </>
    ) : (
      <>
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
      </>
    );

  return (
    <>
      <div className={styles.container}>
        <header>
          <Link to="/" className="logo">
            <Logo />
          </Link>
          {renderButtons()}
        </header>
        <main>{props.children}</main>
        <footer>
          <p>&#169; 2019 Copyright</p>
        </footer>
      </div>
      {isSignInFormVisible && (
        <SignIn
          toggleSignInVisibility={toggleSignInVisibility}
          onToggleForms={toggleForms}
        />
      )}
      {isSignUpFormVisible && (
        <SignUp
          toggleSignUpVisibility={toggleSignUpVisibility}
          onToggleForms={toggleForms}
        />
      )}
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node
};
