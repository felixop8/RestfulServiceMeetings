import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {Link, IndexLink} from 'react-router';
import MeetingList from './MeetingList';


class MeetingPage extends Component {

  constructor() {
    super();

    this.state = {
      meetings: []
    };
  }

  componentDidMount() {
    fetch('/api/v1/meeting')
      .then(response => {
        return response.json();
      })
      .then(meetings => {
        this.setState({meetings: meetings.meetings});
      });
  }


  render() {
    const {meetings} = this.state;

    if ({meetings}.meetings.length == 0) {
      return (
        <div>
          <h1>Error</h1>
        </div>
        )
    } else {
      return (
        <div>
          <MeetingList meetings={meetings} />
        </div>
      );
    }
  }
}


export default MeetingPage;


