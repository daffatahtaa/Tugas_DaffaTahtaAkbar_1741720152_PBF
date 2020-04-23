import firebase from "firebase/app"
import "firebase/auth"
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyDU5MeojJSqi_7FLP4h0yA9fcNrKqZ7lb0",
    authDomain: "fir-53b35.firebaseapp.com",
    databaseURL: "https://fir-53b35.firebaseio.com",
    projectId: "fir-53b35",
    storageBucket: "fir-53b35.appspot.com",
    messagingSenderId: "860451278327",
    appId: "1:860451278327:web:f191a3529672ae5f9e72f2",
    measurementId: "G-NT4V8DMRR0"
  };

  export const myFIrebase = firebase.initializeApp(firebaseConfig);
  const baseDb = myFIrebase.firestore();
  export const db = baseDb;