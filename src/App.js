import React from 'react'
import './App.css'

function App () {
  return (
    <div id="app">
      <div id="launcher">Launcher</div>
      <div id="remote-video" className="video">Remote Video</div>
      <div id="local-video" className="video">Local Video</div>
      <div id="controls">
        <button title="Start Call">Start Call</button>
        <button title="Toggle Mute">Mute</button>
        <button title="Toggle Preview">Stop Preview</button>
        <button title="End Call">End Call</button>
      </div>
    </div>
  )
}

export default App
