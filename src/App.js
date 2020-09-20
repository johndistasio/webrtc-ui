import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Redirect, Switch, Link, useParams, useRouteMatch } from 'react-router-dom'
import './App.css'

function App () {
  return (
    <Router>
      <Switch>
        <Route path='/' exact component={Launcher}/>
        <Route path='/call/:call' component={Call}/>
        <Route path='*'>
          <Redirect to='/'/>
        </Route>
      </Switch>
    </Router>
  )
}

function Launcher () {
  const { url } = useRouteMatch()

  return (
    <Link to={`${url}call/test`}>
      <div id='launcher'>Launcher</div>
    </Link>
  )
}

function Call () {
  const { call } = useParams()
  const { url } = useRouteMatch()
  const [clazz, setClazz] = useState('green')

  const toggleColor = () => {
    setClazz(clazz === 'green' ? 'orange' : 'green')
  }

  return (
    <div id='call'>
      <div id='remote-video' className='video'>{call}</div>
      <div id='local-video' className={clazz} onClick={() => { toggleColor() }}>Local Video</div>
      <div id='controls'>
        <Link to='/'>
          <span>Back</span>
        </Link>
        <button title='Start Call'>Start Call</button>
        <button title='Toggle Mute'>Mute</button>
        <button title='Toggle Preview'>Stop Preview</button>
        <button title='End Call'>End Call</button>
      </div>
    </div>
  )
}

export default App
