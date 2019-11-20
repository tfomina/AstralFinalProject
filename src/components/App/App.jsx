import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import Layout from "./../Layout";
import Feed from "./../Feed";
import Post from "./../Post";

export const App = () => (
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
