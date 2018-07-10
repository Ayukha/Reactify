import React from 'react'
import './Person.css'

const person = (props) => {
  return (
    <div className='Person'>
      <p onClick={props.click}> I am  {props.name} and i am {props.age} not {Math.floor(Math.random() * 30)} </p>
      <input type='text' onChange={props.changed} />
    </div>
  	)
}

export default person
