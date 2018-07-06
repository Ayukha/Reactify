import React from 'react'

const person = (props) => {
  return <p> I'm a {props.name} and i am {props.age} not {Math.floor(Math.random() * 30)} </p>
}

export default person
