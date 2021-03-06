import React, { useState, useContext } from "react";
import { AuthContext } from "./index";
import * as firebase from "firebase";
import * as firebaseui from "firebaseui";
import firebaseConfig from "./firebase.config";
import { Redirect } from "react-router-dom";

const Join = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const ui = new firebaseui.auth.AuthUI(firebase.auth());
  firebase.initializeApp(firebaseConfig);
  const Auth = useContext(AuthContext);
  const handleForm = (e) => {
    e.preventDefault();
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((res) => {
        if (res.user) Auth.setLoggedIn(true);
      })
      .catch((e) => {
        setError(e.message);
      });
  };

  const google = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then(function (res) {
        firebase.auth().onAuthStateChanged((user) => {
          if (user) {
            window.location = "localhost:3000";
          }
        });
        console.log(res);
        console.log("naisu");
      })
      .catch(function (e) {
        console.log(e);
        console.log("no naisu");
      });
  };
  return (
    <div>
      <h1>Join</h1>

      <form onSubmit={(e) => handleForm(e)}>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          name="email"
          type="email"
          placeholder="email"
        />
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          name="password"
          type="password"
          placeholder="password"
        />
        <hr />
        <button class="googleBtn" type="button" onClick={() => google()}>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
            alt="logo"
          />
          Join With Google
        </button>
        <button type="submit">Join</button>
        <span>{error}</span>
      </form>
    </div>
  );
};

export default Join;
