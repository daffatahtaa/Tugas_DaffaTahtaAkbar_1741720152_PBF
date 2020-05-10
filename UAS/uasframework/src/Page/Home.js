import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./Home.css";

export default function Home() {
  return (
    <div>
      <div id="home">
       
          <style>
            @import
            url('https://fonts.googleapis.com/css2?family=Josefin+Sans&display=swap');
          </style>
          <div className="quote">
            <h2>
              “Success is usually the culmination of controlling failure.”
            </h2>
          </div>
          <div className="name">
            <h2>Sylvester Stallone, actor</h2>
          </div>
          <a className="lginbtn" href="/Loginuser">
            Login
          </a>
      </div>
    </div>
  );
}
