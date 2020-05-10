import React, { Component } from "react";
import "./App.css";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import Login from "./Page/Login";
import Register from "./Page/Register";
import Home from "./Page/Home";
import Nav from "./Page/Nav";
import Home2 from "./Page/Home2";
import Profile from "./Page/Profile";
import fire from "./firebase/firebase";

const cUser = fire.auth().currentUser;

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
        localStorage.setItem("user", user.uid);
      } else {
        this.setState({ user: null });
        localStorage.removeItem("user");
      }
    });
  }

  check() {
    if (cUser != null) {
      window.location.replace("/home2");
      //<Route path='/home2' exact component={Home2}/>
    }
    //else if (cUser == null){
    //  //<Route path='/home' exact component={Home}/>
    //}
  }

  goHome = () => {
    return this.check();
  };

  render() {
    return (
      <div>
        <Router>
          <Nav />
          {this.state.user ? <Home2 /> : <Home />}
          <Switch>
            <Route path="/loginuser" exact component={Login} />
            <Route path="/registeruser" exact component={Register} />
            <Route path="/profile" exact component={Profile} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
