import React, { Component } from 'react'
import './App.css'
import Person from './Person/Person'

class App extends Component {
  render () {
    return (
      <div className='App'>
        <h1> Hi, I am an app</h1>
        <Person name='max' age='23' />
        <Person name='manu' age='33' />
      </div>
    )
  }
}

export default App
