import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Redirect, Switch, Link, useParams } from 'react-router-dom'
import {
  Button,
  Card,
  OutlinedInput
} from '@material-ui/core'
import CallIcon from '@material-ui/icons/Call'
import './App.css'

function App () {
  return (
    <Router>
      <div id="app">
        <Switch>
          <Route path='/' exact component={Launcher}/>
          <Route path='/about' exact component={About}/>
          <Route path='/terms' exact component={TermsOfService}/>
          <Route path='/call/:call' component={Call}/>
          <Route path='*'>
            <Redirect to='/'/>
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

function getRandomInt (max) {
  return Math.floor(Math.random() * Math.floor(max))
}

function Launcher () {
  const [call, setCall] = useState('')

  return (
    <Card id='launcher'>
      <div id='launcher-input'>
        <OutlinedInput
          placeholder='Enter a Call ID'
          value={call}
          onChange={(e) => setCall(e.target.value)}/>
        <Button
          variant='contained'
          color='primary'
          disabled={call === ''}
          startIcon={<CallIcon/>}
          component={Link}
          to={`/call/${call}`}>Join</Button>
      </div>
      <div id='launcher-controls'>
        <Button
          variant='outlined'
          color='primary'
          // TODO need a better randomized value here
          onClick={() => setCall(`call-${getRandomInt(9999)}`)}>Random</Button>
        <Button
          variant='outlined'
          color='secondary'
          disabled={call === ''}
          onClick={() => setCall('')}>Clear</Button>
      </div>
      <div id='launcher-extra'>
        <ul>
          <li>
            <Link to='/about'>About</Link>
          </li>
          <li>
            <Link to='/terms'>Terms of Service</Link>
          </li>
        </ul>
      </div>
    </Card>
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
