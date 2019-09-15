import React, { Component } from 'react'
import Person from './Person';
import './People.css';
import { firebaseApp } from '../../../Login';
import Summary from './Summary/Summary';

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
        const people = {}
        querySnapshot.forEach((doc) => {
            people[doc.id] = doc.data()
        });
        const id = firebaseApp.auth().currentUser.uid;
        fetch(`https://us-central1-hackthenorth-66d3f.cloudfunctions.net/function-1?user=${id}&matches=True`)
        .then((resp) => {
          resp.json().then(data => {
            const sortedPersons = []
            data.forEach((p) => {
              sortedPersons.push(<Summary key={p} {...people[p]}></Summary>);
            });
            this.setState({people: sortedPersons})
          })
        })
      });
    }
  }
  render() {
    let content;
    if (this.state.people.length === 0) {
      // TODO:  add spinner
      content =  "loading..."
    } else {
    }
    return (
      <div className={"page-container"}>
        {this.state.people}
        <h3>Waiting on more hackers joining the event, when they do we'll update this list</h3>
      </div>
    )
  }
}
