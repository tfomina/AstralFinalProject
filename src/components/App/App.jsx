import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import { useDispatch } from "react-redux";
import Layout from "./../Layout";
import Feed from "./../Feed";
import Post from "./../Post";
import { getItemFromLocalStorage } from "./../../utils";
import { signUpAction } from "./../../redux/actions/users";

export const App = () => {
  const dispatch = useDispatch();

  const currentUser = getItemFromLocalStorage("currentUser");
  if (currentUser) {
    dispatch(signUpAction(currentUser));
  }

  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path="/post/:id" render={props => <Post {...props} />} />
          <Route exact path="/">
            <Feed />
          </Route>
          <Redirect to="/" />
        </Switch>
      </Layout>
    </Router>
  );
};
