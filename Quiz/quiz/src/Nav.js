import React from "react";
import "./App.css";
import { Link } from "react-router-dom";


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
            <h5>DAPS</h5>
          </Link> 
        </li>
        <li className="navbar-center">
          <Link to="/" className="home-nav">
            <h5>Home</h5>
          </Link>
        </li>
        <li className="navbar-center">
          <Link to="/who" className="home-who">
            <h5>Bio</h5>
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
