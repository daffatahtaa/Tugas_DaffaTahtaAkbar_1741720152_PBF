import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import logo from "./logo.svg";
import pic from "./image/pic.png";
import "./App.css";
import Contact from "./Contact";
import Nav from "./Nav";
import Who from "./Who";
import Home from "./Home";

export default function App() {
  return (
    <div>
      <Router>
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" exact component={Contact} />
          <Route path="/who" exact component={Who} />
          <Route path="/contact" exact component={Contact} />
        </Switch>
      </Router>
    </div>
  );
}
