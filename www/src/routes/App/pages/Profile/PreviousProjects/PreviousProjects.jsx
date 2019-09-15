import React, { Component } from 'react'

const Project = (props) => (
  <div className={'project-container'}>
    <div className={'project-image-mock'}></div>
    <span>{props.software_entries}</span>
  </div>
)

export default class PreviousProjects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      projects: [],
    }
  }
  async componentDidMount() {
    if (this.props.loading) {

    }
  }
  render() {
    return (
      <div className={'previous-project-wrapper'}>
        <div className={'previous-project-container'}>
          {this.state.projects}
        </div>
      </div>
    )
  }
}
