import React, { Component } from 'react'
import './App.css'
import Person from './Person/Person'

class App extends Component {
	state = {
		persons: [
		{name: 'max', age: '28'},
		{name: 'manu', age: '38'},
		{name: 'steffanie', age: '38'},


		]
	}

	switchNameHandler = () =>{
		// console.log('was clicked');
		// this.state.persons[0].name= "Ayush" not done directly
		this.setState({
			persons: [
		{name: 'Ayush', age: '28'},
		{name: 'manu', age: '38'},
		{name: 'steffanie', age: '38'},

		]
	})
	}


  render () {
    return (
      <div className='App'>
        <h1> Hi, I am an app</h1>
        <button onClick={this.switchNameHandler}>switch name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age} />
      </div>
    )
  }
}

export default App
