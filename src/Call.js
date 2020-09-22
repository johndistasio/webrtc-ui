import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./Call.css";

function Call() {
  const { call } = useParams("");
  const [joined, setJoined] = useState(false);
  const [muted, setMuted] = useState(false);
  const [session, setSession] = useState(null);

  useEffect(() => {
    // TODO parameterize URL
    fetch(`http://localhost:8080/call/${call}`)
      .then((response) => {
        if (response.status === 409) {
          // TODO handle error condition
          return;
        }

        if (!response.ok) {
          // TODO handle error condition
          return;
        }

        // TODO parameterize header name
        let id = response.headers.get("X-Signal-Session");

        if (id === null) {
          // TODO handle error condition
          return;
        }

        setSession(id);
        setJoined(true);
      })
      .then((id) => {
        console.log(`Joined call ${call} as ${id}`);
      })
      .catch((error) => {
        setSession(null);
        setJoined(false);
      });

    return () => console.log("Call cleanup");
  }, [call]);

  const joinCall = () => console.log("join call");

  const mute = () => {
    setMuted(!muted);
    console.log("mute");
  };

  return (
    <div className="call">
      <CallScreen callId={`Call: ${call} Session: ${session}`} />
      <CallPreview />
      <CallControls
        disabled={!joined}
        onJoinCall={joinCall}
        muted={muted}
        onMute={mute}
      />
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

function CallControls(props) {
  return (
    <div className="call-controls">
      <Link to="/">
        <button title="Back">Back</button>
      </Link>
      <button disabled={props.disabled} onClick={() => props.onJoinCall()}>
        Join Call
      </button>
      <button disabled={props.disabled} onClick={() => props.onMute()}>
        {props.muted ? "Mute" : "Unmute"}
      </button>
      <button disabled={props.disabled} title="Toggle Camera">
        Stop Video
      </button>
      <button disabled={props.disabled} title="Leave Call">
        Leave Call
      </button>
      <button disabled={props.disabled} title="Toggle Preview">
        Stop Preview
      </button>
    </div>
  );
}

export default Call;
