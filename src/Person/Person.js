import React from 'react'

const person = (props) => {
  return (
    <div>
      <p onClick={props.click}> I am a {props.name} and i am {props.age} not {Math.floor(Math.random() * 30)} </p>
      <input type='text' onChange={props.changed} />
    </div>
  	)
}

export default person
