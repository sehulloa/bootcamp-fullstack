import React from 'react'
import ReactDOM from 'react-dom'

const exercises1 = 10
const exercises2 = 7
const exercises3 = 14

const Header = (props) => {
  return (
    <h1>{props.course}</h1>
  )
}

const Part = (props) => {
  return (
    <p>
      {props.part} {props.exercise}
    </p>
  )
}

const Content = (props) => {
  const part1 = 'Fundamentals of React'
  const part2 = 'Using props to pass data'
  const part3 = 'State of a component'
  return (
    <div>
      <Part part={part1} exercise={exercises1} />
      <Part part={part2} exercise={exercises2} />
      <Part part={part3} exercise={exercises3} />
    </div>
  )
}

const Total = (props) => {
  return (
    <p>Number of exercises {props.exercise1 + props.exercise2 + props.exercise3}</p>
  )
}

const App = () => {
  const course = 'Half Stack application development'

  return (
    <div>
      <Header course={course} />
      <Content />
      <Total exercise1={exercises1} exercise2={exercises2} exercise3={exercises3} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))