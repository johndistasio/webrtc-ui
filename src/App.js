import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Redirect, Switch, Link, useParams } from 'react-router-dom'
import './App.css'

function App () {
  return (
    <Router>
      <Switch>
        <Route path='/' exact component={Launcher}/>
        <Route path='/about' exact component={About}/>
        <Route path='/terms' exact component={TermsOfService}/>
        <Route path='/call/:call' component={Call}/>
        <Route path='*'>
          <Redirect to='/'/>
        </Route>
      </Switch>
    </Router>
  )
}

function Launcher () {
  return (
    <div id='launcher'>
      <ul>
        <li>
          <Link to='/call/test'>Launcher</Link>
        </li>
        <li>
          <Link to='/about'>About</Link>
        </li>
        <li>
          <Link to='/terms'>Terms of Service</Link>
        </li>
      </ul>
    </div>
  )
}

function About () {
  return <div id='about'>About</div>
}

function TermsOfService () {
  return <div id='tos'>Terms of Service</div>
}

function Call () {
  const { call } = useParams()
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
