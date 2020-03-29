import React from "react";
import "./App.css";
import pic from "./image/logo.png";
import home from "./image/Home.png";
import who from "./image/Who.png";
import contact from "./image/Contact.png";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Contact from "./Contact";

export default function Nav() {
  return (
    <nav>
      <link
        href="https://fonts.googleapis.com/css?family=Oxygen+Mono|Tillana&display=swap"
        rel="stylesheet"
      ></link>
      <ul className="base">
        <li className="navbar-center">
          <Link to="/" className="logo">
            <h4>DAPS</h4>
          </Link>
        </li>
        <li className="navbar-center">
          <Link to="/" className="home-nav">
            <h5>Home</h5>
          </Link>
        </li>
        <li className="navbar-center">
          <Link to="/who" className="home-who">
            <h5>Who</h5>
          </Link>
        </li>
        <li className="navbar-right">
          <Link to="/contact" className="home-contact ">
            <h5>Contact</h5>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
