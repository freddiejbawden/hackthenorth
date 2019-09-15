import React, { Component } from 'react'
import './Interests.css'

const  InterestText =  (props) => (<span className={'interest-text'}>{props.text}</span>)



export default class Interests extends Component {
  render() {
    const interests =  [];
    this.props.interests.forEach((text) =>  {
      interests.push(<InterestText key={text} text={text}></InterestText>)
    });
    let needs = [];
    this.props.needs.forEach((text) =>  {
      needs.push(<InterestText key={text} text={text}></InterestText>)
    });
    return (
      <div className={'interests-container'}>
        <span >I've worked with...</span>
        <div>
          {interests}
        </div>
        <span >I want to learn...</span>
        <div>
          {needs}
        </div>
      </div>
    )
  }
}
