import React, { useState } from 'react'
import './App.css'

function App () {
  const [clazz, setClazz] = useState('green')

  const toggleColor = () => {
    setClazz(clazz === 'green' ? 'orange' : 'green')
  }

  return (
    <div id='app'>
      <div id='launcher'>Launcher</div>
      <div id='remote-video' className='video'>Remote Video</div>
      <div id='local-video' className={clazz} onClick={() => { toggleColor() }}>Local Video</div>
      <div id='controls'>
        <button title='Start Call'>Start Call</button>
        <button title='Toggle Mute'>Mute</button>
        <button title='Toggle Preview'>Stop Preview</button>
        <button title='End Call'>End Call</button>
      </div>
    </div>
  )
}

export default App
