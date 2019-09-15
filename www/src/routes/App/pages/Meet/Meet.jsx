import React, { Component } from 'react'
import Meetings from './Meetings';
export default class Meet extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      meetings: true
    }
  }
  render() {
    return (
        <Meetings db={this.props.db}></Meetings>
    )
  }
}
