import React, { Component } from 'react'
import './App.css'
import Person from './Person/Person'

class App extends Component {
	state = {
		persons: [
		{name: 'max', age: '28'},
		{name: 'manu', age: '38'},
		{name: 'steffanie', age: '38'},


		],
		showPersons: false
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

	nameChangedHandler = (event) =>{

		this.setState({
			persons: [
		{name: event.target.value, age: '28'},
		{name: event.target.value, age: '38'},
		{name: 'steffanie', age: '38'},

		]
	})
	}

	togglePersonHandler  = () => {
		const doesshow = this.state.showPersons;
		this.setState({
			showPersons: !doesshow
		}

			)

	}



  render () {
  	const style = {
		backgroundColor: 'white',
		font: 'inherit',
		border: '1px solid blue',
		padding: '8px',

	};

    return (
      <div className='App'>
        <h1> Hi, I am an app</h1>
        <button style={style} onClick={this.togglePersonHandler}>switch name</button>
        { this.state.showPersons?
        	<div>
        	<Person
        	 name={this.state.persons[0].name}
          	age={this.state.persons[0].age}
          	click={this.switchNameHandler} 
          	changed={this.nameChangedHandler }/>
        	<Person
        	 name={this.state.persons[1].name} 
        	 age={this.state.persons[1].age} 
         	click={this.switchNameHandler}
         	changed={this.nameChangedHandler }/>
      		</div> : null
      	}
     </div>
    )
  }
}

export default App
