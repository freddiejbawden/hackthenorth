import React, { Component } from 'react'
import './Interests.css'

export default class Interests extends Component {
  render() {
    let interests = "";
    this.props.interests.forEach((text) =>  {
      interests += (text + ", ")
    });
   
    return (
      <div className={'interests-container'}>
        <span >I've worked with...</span>
        <div>
          {interests}
        </div>
        
      </div>
    )
  }
}
