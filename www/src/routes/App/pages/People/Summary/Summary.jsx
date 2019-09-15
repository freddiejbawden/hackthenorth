import React, { Component } from 'react'
import './Summary.css'
export default class Summary extends Component {
  render() {
    let interests = ""
    const interestsChopped = this.props.interests.slice(0,3)
    interestsChopped.forEach((i) => {
      interests += (i + ", ")
    })
    return (
      <div className={'summary-container'}>
        <div className={'profile-image-container'}>
          <img src="https://source.unsplash.com/random/200x200" className={'profile-image'}></img>
        </div>
        <div className={'details-container'}>
          <span>{this.props.name}</span>
          <span>{this.props.status}</span>
          <span>Interested In: {interests}</span>
        </div>
      </div>
    )
  }
}
