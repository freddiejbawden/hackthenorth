import React, { Component } from 'react'
import './Summary.css'
export default class Summary extends Component {
  render() {
    return (
      <div className={'summary-container'}>
        <div className={'profile-image-container'}>
          <img src="https://www.ctvalleybrewing.com/wp-content/uploads/2017/04/avatar-placeholder.png" className={'profile-image'}></img>
          <div className={'add-button'}></div>
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
