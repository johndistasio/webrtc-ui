import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import "./App.css";
import Call from "./Call";
import Launcher from "./Launcher";

function App() {
  return (
    <Router>
      <div id="app">
        <Switch>
          <Route path="/" exact component={Launcher} />
          <Route path="/about" exact component={About} />
          <Route path="/terms" exact component={TermsOfService} />
          <Route path="/call/:call" component={Call} />
          <Route path="*">
            <Redirect to="/" />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function About() {
  return <div id="about">About</div>;
}

function TermsOfService() {
  return <div id="tos">Terms of Service</div>;
}

export default App;
