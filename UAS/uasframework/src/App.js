import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import Login from './Page/Login'
import Register from './Page/Register'
import Home from './Page/Home';
import Nav from "./Page/Nav";


export default function App() {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/loginuser" exact component={Login} />
        <Route path="/registeruser" exact component={Register} />
      </Switch>
      
    </Router>
  );
}
