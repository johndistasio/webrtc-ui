import React from "react";
import { Link, useParams } from "react-router-dom";

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

export default Call;
