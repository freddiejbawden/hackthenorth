import React, { Component } from 'react'
import './Summary.css'
export default class Summary extends Component {
  render() {
    return (
      <div className={'summary-container'}>
        <div className={'profile-image-container'}>
          <img src="https://source.unsplash.com/random/200x200" className={'profile-image'}></img>
          
        </div>
        <div className={'details-container'}>
          <span>{this.props.name}</span>
          <span>{this.props.age}</span>
          <span>{this.props.pronouns}</span>
          <span>{this.props.status}</span>
        </div>
      </div>
    )
  }
}
