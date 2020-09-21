import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
  Link,
  useParams,
} from "react-router-dom";
import { Button, Card, OutlinedInput } from "@material-ui/core";
import CallIcon from "@material-ui/icons/Call";
import "./App.css";

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

function Call() {
  const { call } = useParams();

  return (
    <div className="call">
      <CallScreen callId={call} />
      <CallPreview />
      <CallControls />
    </div>
  );
}

function CallScreen(props) {
  return <div className="call-screen">{props.callId}</div>;
}

function CallPreview() {
  const onClick = () => {
    console.log("preview clicked");
  };

  return (
    <div className="call-preview" onClick={() => onClick()}>
      Local Video
    </div>
  );
}

function CallControls() {
  return (
    <div className="call-controls">
      <Link to="/">
        <span>Back</span>
      </Link>
      <button title="Start Call">Start Call</button>
      <button title="Toggle Mute">Mute</button>
      <button title="Toggle Preview">Stop Preview</button>
      <button title="End Call">End Call</button>
    </div>
  );
}

export default App;
export { Launcher, Call };
