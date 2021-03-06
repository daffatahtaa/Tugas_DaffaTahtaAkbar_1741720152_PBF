import React, { Component } from "react";
import "./Register.css";
import fire from "../firebase/firebase";

var database = fire.database();

//function writeData(userId, username, uEmail) {
  //fire.database().ref().child(userId);
//}

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.signup = this.signup.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      username: "",
      email: "",
      password: "",
    };
  }
  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  signup(e) {
    e.preventDefault();
    fire
      .auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then((u) => {})
      .then((u) => {
        console.log(u);
        fire
          .auth()
          .signInWithEmailAndPassword(this.state.email, this.state.password);
          window.alert('Register complete, redirecting to Home')
          window.location.replace('/');
      })
      .then((u) => {
        const date = new Date();
        
         fire.database().ref('users/' + fire.auth().currentUser.uid).child('user-data').set({
           email: this.state.email,
           username: this.state.username,
           password: this.state.password
         })
      })
      .catch((error) => {
        window.alert(error)
        console.log(error);
      });
    //fire.database().ref().child("biodata").set({
      //username: this.state.username,
      //email: this.state.email,
    //});
    //window.location.replace("/loginuser");
  }
  render() {
    return (
      <div>
        <div id="home">
          <style>
            @import
            url('https://fonts.googleapis.com/css2?family=Josefin+Sans&display=swap');
          </style>
          <style>
            @import
            url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300&display=swap');
          </style>
          <div>
            <div className="Input-placeholder">
              <h2 className="ttl-rgstr">Username</h2>
              <input
                type="text"
                placeholder="Username"
                className="Input-text"
                value={this.state.username}
                onChange={this.handleChange}
                name="username"
              ></input>
            </div>
            <div className="Input-placeholder">
              <h2 className="ttl-rgstr">Email</h2>
              <input
                type="email"
                placeholder="Example@email.com"
                className="Input-text"
                value={this.state.email}
                onChange={this.handleChange}
                name="email"
              ></input>
            </div>
            <div className="Input-placeholder">
              <h2 className="ttl-rgstr">Password</h2>
              <input
                type="password"
                placeholder="Password"
                className="Input-text"
                value={this.state.password}
                onChange={this.handleChange}
                name="password"
              ></input>
            </div>
            <a className="btn-rgs2" onClick={this.signup}>
              Register
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Register;
