import React, { Component } from 'react'
import './SignUp2.scss';
import Input from '../../Components/Input';
import Button from '../../Components/Button';
import { firebaseApp } from '../Login/Login';
import { withRouter } from "react-router";
import CircularProgress from '@material-ui/core/CircularProgress';
const db = firebaseApp.firestore();

class SignUp2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      loadingText: "Processing...",
    }
  }
  componentDidMount() {
    if (this.state.loading) {
      if (firebaseApp.auth().currentUser.uid) {
        db.collection("users").doc(firebaseApp.auth().currentUser.uid).get().then(doc => {
          fetch(`http://localhost:5555/user/${doc.data().devpost}`).then(res => {
            res.json().then((data) => {
              const stats = {}
              data.interests.concat(data.skills).forEach((elm) => {
                stats[elm.toLowerCase()] = 0;
              })
              db.collection("users").doc(firebaseApp.auth().currentUser.uid).set(
                {
                  stats,
                  interests: data.skills,
                  meetings: [],
                  ...doc.data()
                }
              ).then((ref) => {
                this.props.history.push('/app');
              })
            })
          })
        })
      }
      
    }
   
  }
  render() {
    
    let content;
   
    return (
      <div>
           <h1>{this.state.loadingText}</h1> 
           <CircularProgress/>
        </div>
    )
  }
}

export default withRouter(SignUp2);
