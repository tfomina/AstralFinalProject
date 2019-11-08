import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import List from "./../List";
import Post from "./../Post";
import Button from "../Controls";
import { ReactComponent as Logo } from "./../../images/logo.svg";

import styles from "./App.less";

export const App = () => (
  <div className={styles.container}>
    <header>
      <a href="/" className="logo">
        <Logo />
      </a>
      <Button className={styles.signIn}>Войти</Button>
      <Button className={styles.signUp}>Зарегистрироваться</Button>
    </header>
    <main>
      <Router>
        <Switch>
          <Route exact path="/post/:id">
            <Post />
          </Route>

          <Route exact path="/">
            <List />
          </Route>
          <Redirect to="/" />
        </Switch>
      </Router>
    </main>
    <footer>
      <p>&#169; 2019 Copyright</p>
    </footer>
  </div>
);
