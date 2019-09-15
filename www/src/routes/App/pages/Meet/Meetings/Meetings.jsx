import React, { Component } from 'react'
import './Meetings.css'

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

const Meeting = (props) => {
  var date = new Date(props.time.seconds*1000);
  const day = date.getDate();
  const month = monthDict[date.getMonth()];
  const time = `${date.getHours()}:${date.getMinutes()}`
  return (
    <div className={'meeting-container'}>
      <div className={'date-wrapper'}>
        <div className={'date-container'}>
          <span className={'date-month'}>{month}</span>
          <span className={'date-day'}>{day}</span>
        </div>  
      </div>
      <div className={'details-container'}>
        <span>{props.name}</span>
        <span>{props.location}, {time}</span>
      </div>
      <div className={'attendence-count-container'}>
        <div className={'attendence-count-text'}>
          {props.attendents}
        </div>
        <span>Attending</span> 
      </div>
    </div>
  )
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
      await this.props.db.collection("meetings").get().then((querySnapshot) => {
        const meetings = [];
        querySnapshot.forEach((doc) => {
        console.log(doc.id)
        if (this.props.meetings.includes(doc.id)) {
          const meetingData = doc.data();
          console.log(meetingData.time);
          meetings.push(
            <Meeting key={doc.id} {...meetingData}></Meeting>
          );
        }          
       });
       this.setState({meetings, loading:false})
     });
   } 
  }
  render() {
    return (
      <div className={'meetings-container'}>
        <span className={'meeting-title'}>Marked As Attending</span>
        {this.state.meetings}
      </div>
    )
  }
}
