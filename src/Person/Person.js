import React from 'react'

const person = (props) => {
  return (
    <p onClick={props.click}> I'm a {props.name} and i am {props.age} not {Math.floor(Math.random() * 30)} </p>
    <input type="text" onChange={props.changed}></input>
  	)
}

export default person
