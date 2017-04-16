import React, { Component } from 'react';
import DateLabel from './components/DateLabel';
import RoomList from './components/RoomList';
import RoomDetails from './components/RoomDetails'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.onIncrement = this.onIncrement.bind(this);
    this.onDecrement = this.onDecrement.bind(this);

    this.state = {
      selRoom: 0,
      displayedDate: new Date(),
      currentDate: new Date(),
      rooms: []
    };
  }

  handleClick(num) {
    this.setState({
      selRoom: num
    });
  }

  onIncrement(num = 1) {
    let displayedDate = this.state.displayedDate;
    displayedDate.setDate(displayedDate.getDate() + 1);
    this.setState({
      displayedDate: displayedDate
    }, () => this.fetchRooms());
  }

  onDecrement(num = 1) {
    const state = this.state;
    let displayedDate = state.displayedDate;

    if (state.currentDate < displayedDate) {
      displayedDate.setDate(displayedDate.getDate() - 1);
      this.setState({
        displayedDate: displayedDate
      }, () => this.fetchRooms());
    }
  }

  componentWillMount() {
    this.fetchRooms();
  }

  fetchRooms() {
    const URL = 'https://challenges.1aim.com/roombooking/getrooms';

    const fetchOptions = {
      method: 'post',
      body: JSON.stringify({
        date: this.state.displayedDate / 1000
      })
    }

    fetch(URL, fetchOptions)
      .then(res => res.json())
      .then(json => this.setState({
        rooms: json
      }));
  }

  render() {
    const rooms = this.state.rooms;

    return (
      <div className="container-fluid">
        <div className='row'>
          <DateLabel date={this.state.displayedDate} onIncrement={this.onIncrement} onDecrement={this.onDecrement} />
        </div>
        <div className='row room-group'>
          <RoomList className='col-xs-6 col-md-4' roomList={rooms} handleClick={this.handleClick} />
          <RoomDetails className='col-xs-6 col-md-8' details={rooms[this.state.selRoom]} />
        </div>
      </div>
      );
  }
}

export default App;
