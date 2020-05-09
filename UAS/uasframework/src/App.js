import React, { Component } from "react";
import "./App.css";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import Login from "./Page/Login";
import Register from "./Page/Register";
import Home from "./Page/Home";
import Nav from "./Page/Nav";
import Home2 from "./Page/Home2";
import fire from "./firebase/firebase";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
    };
    this.authListener = this.authListener.bind(this);
  }

  componentDidMount() {
    this.authListener();
  }

  authListener() {
    fire.auth().onAuthStateChanged((user) => {
      console.log(user);
      if (user) {
        this.setState({ user });
        localStorage.setItem('user', user.uid);
      } else {
        this.setState({ user: null });
        localStorage.removeItem('user');
      }
    });
  }

  render() {
    return (
      <div>
        <Router>
          <Nav />
          {this.state.user ? (<Home2 />) : (<Home />)}
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/loginuser" exact component={Login} />
            <Route path="/registeruser" exact component={Register} />
          </Switch>
        </Router>
        
      </div>
    );
  }
}

export default App;
