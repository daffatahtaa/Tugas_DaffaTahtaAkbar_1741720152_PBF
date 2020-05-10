import React from "react";
import { Link } from "react-router-dom";
import fire from "../firebase/firebase";
import "./Nav.css";

const user = fire.auth().currentUser;
class Nav extends React.Component {
  render() {
    return (
      <nav>
        <style>
          @import
          url('https://fonts.googleapis.com/css2?family=Jost:wght@560&display=swap');
        </style>
        <style>
          @import
          url('https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@300&display=swap');
        </style>
        <ul className="base">
          <li className="logo-placeholder">
            <Link to="/" className="brand">
              <a className="navBrand">WRKOUT</a>
            </Link>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Nav;
