import React, { Component } from 'react'
import withFirebaseAuth from 'react-with-firebase-auth';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import firebaseConfig from '../../firebaseConfig';
import { withRouter } from "react-router";
import './Login.scss';
import Button from '../../Components/Button';

export const firebaseApp = firebase.initializeApp(firebaseConfig);
const firebaseAppAuth = firebaseApp.auth();
const providers = {
  googleProvider: new firebase.auth.GoogleAuthProvider(),
};

class Login extends Component {
  render() {
    const {
      user,
      signOut,
      signInWithGoogle,
    } = this.props;
    const signupFunction = async () => {
      await signInWithGoogle();
      this.props.history.push("/signup");
    }
    const signinFunction = async () => {
      await signInWithGoogle();
      this.props.history.push("/app");
    }
    
    return (
      <div className={'login-container'}>
        <h1>Matchbox</h1>
        <Button onClick={signupFunction} text={"Sign Up"} color={"red"}></Button>
        <Button onClick={signinFunction} text={"Login"} color={"blue"}></Button>
      </div>
    )
  }
}

const fb = withFirebaseAuth({
  providers,
  firebaseAppAuth,
})(Login);
export default withRouter(fb);
