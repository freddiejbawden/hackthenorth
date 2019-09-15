import React, { Component } from 'react'
import './SignUp.scss';
import Input from './../../Components/Input';
import Button from './../../Components/Button';
import { firebaseApp } from '../Login/Login';
import { withRouter } from "react-router";

const db = firebaseApp.firestore();


class SignUp extends Component {
  render() {
    const pushAndMoveOn = () => {
      const allInputs = [].slice.call(document.querySelectorAll('.input-box')).map((x) => x.value.toLowerCase());
      console.log(allInputs);
      // This was written at hour 24, pls don't judge
      const data = {
        'name':allInputs[0],
        'pronouns':allInputs[1],
        'status':allInputs[2],
        'github':allInputs[3],
        'devpost':allInputs[4]
      }
      db.collection("users").doc(firebaseApp.auth().currentUser.uid).set(data).then((ref) => {
        this.props.history.push("/signup2");
      }).catch((e) => {
        console.error(e)
      });
    }
    return (
      <div className={'login-container'}>
        <h1>Welcome to Name</h1>
        <h3>A world of hackers is just a few steps away. We need a few details so we can find great matches for you</h3>
        <Input type={"text"} label={"Display Name"}></Input>
        <Input type={"text"} label={"Pronouns"}></Input>
        <Input type={"text"} label={"Job Title/University"}></Input>
        <Input type={"text"} label={"Github Username"}></Input>
        <Input type={"text"} label={"Devpost Username"}></Input>
        <Button onClick={pushAndMoveOn} text={"Next"} color={"red"}></Button>
      </div>
    )
  }
}

export default withRouter(SignUp);
