import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button, Card, OutlinedInput } from "@material-ui/core";
import CallIcon from "@material-ui/icons/Call";
import "./Launcher.css";

const getRandomInt = (max) => Math.floor(Math.random() * Math.floor(max));

function Launcher() {
  // TODO use a friendlier, memorable format for random call IDs
  const randomCall = () => `call-${getRandomInt(9999)}-${getRandomInt(9999)}`;

  const [call, setCall] = useState(randomCall());

  return (
    <Card className="launcher">
      <div className="launcher-input">
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
      <div className="launcher-controls">
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
    </Card>
  );
}

export default Launcher;
