import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
  Link,
} from "react-router-dom";
import { Button, Card, OutlinedInput } from "@material-ui/core";
import CallIcon from "@material-ui/icons/Call";
import "./App.css";
import Call from "./Call";

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

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function Launcher() {
  // TODO use a friendlier, memorable format for random call IDs
  const randomCall = () => `call-${getRandomInt(9999)}-${getRandomInt(9999)}`;

  const [call, setCall] = useState(randomCall());

  return (
    <Card id="launcher">
      <div id="launcher-input">
        <OutlinedInput
          placeholder="Enter a Call ID"
          value={call}
          onChange={(e) => setCall(e.target.value)}
        />
        <Button
          variant="contained"
          color="primary"
          disabled={call === ""}
          startIcon={<CallIcon />}
          component={Link}
          to={`/call/${call}`}
        >
          Join
        </Button>
      </div>
      <div id="launcher-controls">
        <Button
          variant="outlined"
          color="primary"
          onClick={() => setCall(randomCall())}
        >
          Random
        </Button>
        <Button
          variant="outlined"
          color="secondary"
          disabled={call === ""}
          onClick={() => setCall("")}
        >
          Clear
        </Button>
      </div>
      <div id="launcher-extra">
        <ul>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/terms">Terms of Service</Link>
          </li>
        </ul>
      </div>
    </Card>
  );
}

function About() {
  return <div id="about">About</div>;
}

function TermsOfService() {
  return <div id="tos">Terms of Service</div>;
}

export default App;
export { Launcher, Call };
