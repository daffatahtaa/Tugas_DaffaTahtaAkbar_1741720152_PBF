import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

export default function Nav() {
  return (
    <nav href='Nav.css'>
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Jost:wght@560&display=swap');
      </style>
      <ul className="base">
        <li className="logo-placeholder">
          <Link to="/" className="brand">
            <a className='navBrand'>WRKOUT</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
