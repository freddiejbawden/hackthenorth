import React, { Component } from 'react'
import './Person.scss';

const InterestedIn = (props) => {
  props.interests.slice(0,3);
  return (
    <div>Interests:
      <span></span>
    </div>
  )
}

export default class Person extends Component {
  render() {
    return (
      <div className={"person"}>
        <span>{this.props.name}</span>
        <span>{this.props.status}</span>
      </div>
    )
  }
}
