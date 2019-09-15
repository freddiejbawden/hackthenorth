import React, { Component } from 'react'
import './Meetings.css'

const Meeting = (props) => (
  <div className={'meeting-container'}>
    <div className={'date-wrapper'}>
      <div className={'date-container'}>
        <span className={'date-month'}>{this.props.month}</span>
        <span className={'date-day'}>{this.props.day}</span>
      </div>  
    </div>
    <div className={'details-container'}>
      <span>{this.props.name}</span>
      <span>{this.props.location}, {this.props.time}</span>
    </div>
    <div className={'attendence-count-container'}>
      <div className={'attendence-count-text'}>
        {this.props.num_attending}
      </div>
      <span>Attending</span> 
    </div>
  </div>
)


export default class Meetings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      meetings: []
    }
  }
  render() {
    let content;
    if (!this.props.meetings || this.props.meetings.length === 0) {
      content = "No Meeting Scheduled!"
    } else  {
      this.props.meetings.forEach((meeting) =>  {
        content.push(<Meeting meeting></Meeting>)
      });
    }
    return (
      <div className={'meetings-container'}>
        <span className={'meeting-title'}>Marked As Attending</span>
      </div>
    )
  }
}
