import React, { Component } from 'react'
import Person from './Person';
import './People.css';

export default class People extends Component {
  constructor(props) {
    super(props);
    this.state = {
      people: []
    }
  }
  async componentDidMount() {
    //TODO: add  a check to see if there has been more users added
    if (this.state.people.length === 0) {
      await this.props.db.collection("users").get().then((querySnapshot) => {
        const people = []
        querySnapshot.forEach((doc) => {
            console.log(`${doc.id} => ${doc.data()}`);
            people.push(doc)
        });
        this.setState({people})
      });
    }
  }
  render() {
    let content;
    if (this.state.people.length === 0) {
      // TODO:  add spinner
      content =  "loading..."
    } else {
      content = [];
      this.state.people.forEach((person) => {
        content.push(<Person key={person.id} {...person.data()}></Person>);
      });
    }
    return (
      <div className={"page-container"}>
        {content}
      </div>
    )
  }
}
