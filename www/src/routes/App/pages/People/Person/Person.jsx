import React, { Component } from 'react'
import './Person.css';

export default class Person extends Component {
  render() {
    console.log(this.props)
    return (
      <div className="person">
        <p>{this.props.name}</p>
        <p>{this.props.age}</p>
        <p>{this.props.pronouns}</p>
      </div>
    )
  }
}
