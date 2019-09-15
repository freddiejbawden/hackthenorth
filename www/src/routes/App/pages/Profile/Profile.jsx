import React, { Component } from 'react'
import Summary from './Summary';
import './Profile.scss'
import Interests from './Interests';
import Meetings from './Meetings';
export default class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: "Loading...",
      loading: true,
    }
  }
  async componentDidMount() {   
    if (this.state.loading) {
       await this.props.db.collection("users").get().then((querySnapshot) => {
        let content;
        querySnapshot.forEach((doc) => {
          const user = doc.data();
          console.log(this.props.name)
         if (doc.id === this.props.user) {
          content = (
            <div className={'profile-container'}>
            <Summary {...user}></Summary>
            <div className={'message-button'}>Message</div> 
            <Interests interests={user.interests} needs={user.needs}></Interests>
            <Meetings db={this.props.db} meetings={user.meetings}></Meetings>
            </div>
          );
          this.setState({content, loading:false})
         }          
        });
       
      });
    } 
  }
  render() {
    console.log(this.state.content)
    return (
      <div className={'profile-wrapper'}>
        {this.state.content}
      </div>
    );
  }
}
