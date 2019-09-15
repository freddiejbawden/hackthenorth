import React, { Component } from 'react'
import Button from '../../../../../Components/Button'
import './Meetings.css'
import { firebaseApp } from '../../../../Login'

const monthDict = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec"
]

class Meeting  extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rsvped: false,
      buttonText: "RSVP",
    }
  }
  render() {
    var date = new Date(this.props.time.seconds*1000);
    const day = date.getDate();
    const month = monthDict[date.getMonth()];
    const time = `${date.getHours()}:${date.getMinutes()}`

    const rsvp = async () => {
      console.log(firebaseApp.auth().currentUser.uid )
      this.props.db.collection("users").doc((firebaseApp.auth().currentUser.uid || "user2")).get().then(doc => {
        const modMeetings = doc.data().meetings
        modMeetings.push(this.props.meetingId);
        this.props.db.collection("users").doc((firebaseApp.auth().currentUser.uid || "user2")).update({meetings: modMeetings}).then(ref => {
          this.setState({rsvped: true,buttonText: "✓" })
        })
      })
    }
    
    return (
      <div className={'meeting-card'}>
        <div className={'meeting-container-2 '}>
          <div className={'date-wrapper'}>
            <div className={'date-container'}>
              <span className={'date-month'}>{month}</span>
              <span className={'date-day'}>{day}</span>
            </div>  
          </div>
          <div className={'details-container'}>
            <span>{this.props.name}</span>
            <span>{this.props.location}, {time}</span>
          </div>
          <div className={'attendence-count-container'}>
            <div className={'attendence-count-text'}>
              {this.props.attendents}
            </div>
            <span>Attending</span> 
          </div>
        </div>
        
        <Button onClick={rsvp} text={this.state.buttonText}></Button>
      </div>
    )
  }
  
}


export default class Meetings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      meetings: []
    }
  }
  async componentDidMount() {
    if (this.state.loading) {
      const meetings = [];
      await this.props.db.collection("meetings").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          const meetingData = doc.data();
          console.log(meetingData)
          meetings.push(
            <Meeting db={this.props.db} key={doc.id} {...meetingData} meetingId={doc.id}></Meeting>
          );
        });
        this.setState({meetings:meetings, loading:false})
     });
   } 
  }
  render() {
    console.log(this.state.meetings)
    return (
      <div className={'meeting-container-outer'}>
        {this.state.meetings}
      </div>
    )
  }
}
