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
      <ul className="base">
        <li className="navbar-center">
          <Link to="/" className="">
            <img src={pic} />
          </Link>
        </li>
        <li className="navbar-center">
          <Link to="/" className="">
            <img src={home} />
          </Link>
        </li>
        <li className="navbar-center">
          <Link to="/who" className="">
            <img src={who} />
          </Link>
        </li>
        <li className="navbar-right">
          <Link to="/contact" className="">
            <img src={contact} />
          </Link>
        </li>
      </ul>
    </nav>
  );
}
