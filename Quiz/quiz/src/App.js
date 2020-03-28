import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import Contact from "./Contact";
import Nav from "./Nav";
import Who from "./Who";

export default function App() {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" exact component={Contact} />
        <Route path="/who" exact component={Who} />
        <Route path="/contact" exact component={Contact} />
      </Switch>
    </Router>
  );
}

const Home = () => (
  <div>
    <a>Home</a>
  </div>
);
