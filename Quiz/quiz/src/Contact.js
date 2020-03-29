import React from "react";
import "./contact.css";
import App from "./App";
import { Link } from "react-router-dom";

export default function Contact() {
  return (
    <div>
      <body>
        <div class="container">
          <div>
            <a className="link" href="https://www.instagram.com/daffatahtaa">
              INSTAGRAM
            </a>
          </div>
          <div>
            <a className="link" href="https://www.instagram.com/daffatahtaa">
              GITHUB
            </a>
          </div>
          <div>
            <a className="link" href="https://www.behance.net/">
              BEHANCHE
            </a>
          </div>
        </div>
        <header className='header'>
          <h1>Contact</h1>
          <p>Scroll for links</p>
        </header>
      </body>
    </div>
  );
}
