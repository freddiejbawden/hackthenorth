import React, { Component } from 'react'
import withFirebaseAuth from 'react-with-firebase-auth';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import firebaseConfig from '../../firebaseConfig';

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
    return (
      <div>
        {
        user 
          ? <p>Hello, {user.displayName}</p>
          : <p>Please sign in.</p>
        }
        {
          user
            ? <button onClick={signOut}>Sign out</button>
            : <button onClick={signInWithGoogle}>Sign in with Google</button>
        }
      </div>
    )
  }
}

export default withFirebaseAuth({
  providers,
  firebaseAppAuth,
})(Login);
