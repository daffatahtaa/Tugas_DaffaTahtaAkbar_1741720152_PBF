import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css"; 
import Contact from "./Contact";
import Nav from "./Nav";    
import Who from "./Who";
import Home from "./Home";

export default function App() { 
  return (  
    <div>
      <Router>
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/who" exact component={Who} />
          <Route path="/contact" exact component={Contact} />
        </Switch>
      </Router>
    </div>
  );
}
