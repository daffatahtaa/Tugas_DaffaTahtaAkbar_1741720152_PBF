import React, { Component } from "react";
import "./Login.css";
import fire from "../firebase/firebase";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.login = this.login.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      email: "",
      password: "",
    };
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  login(e) {
    e.preventDefault();
    fire
      .auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .then((u) => {
        //redirect to home2
        window.location.replace("/home2");
      })
      .then((u) => {
        console.log(u);
      })
      .catch((error) => {
        alert(error);
        console.log(error);
      });
  }
  render() {
    return (
      <div>
        <div id="home">
          <style>
            @import
            url('https://fonts.googleapis.com/css2?family=Josefin+Sans&display=swap');
          </style>
          <section>
            <h1 className="ttl">Login</h1>
            <div className="Input-placeholder">
              <input
                type="text"
                id="input"
                className="Input-text"
                placeholder="Example@email.com"
                value={this.state.email}
                onChange={this.handleChange}
                name="email"
              ></input>
            </div>
            <h1 className="ttl" style={{ paddingTop: "1vh" }}>
              Password
            </h1>
            <div className="Input-placeholder">
              <input
                type="password"
                id="input"
                className="Input-text"
                placeholder="Password"
                value={this.state.password}
                onChange={this.handleChange}
                name="password"
              ></input>
              <a className="btn-lgn" href="" onClick={this.login}>
                Login
              </a>
              <a className="btn-rgs" href="/registeruser">
                Register
              </a>
            </div>
          </section>
        </div>
      </div>
    );
  }
}

export default Login;
