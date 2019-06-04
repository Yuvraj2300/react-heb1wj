import React, { Component } from 'react'
import UserGreeting from './UserGreeting';
import GuestGreeting from './GuestGreeting';

export default class Greeting extends Component {

  render() {
    const isLoggedIn = this.props.isLoggedIn;
    console.log(isLoggedIn);
    if (isLoggedIn) {
      return (
        <React.Fragment>
          <UserGreeting />
        </React.Fragment>
      );
    } else {
      return (
        <React.Fragment>
          <GuestGreeting />
        </React.Fragment>
      );
    }

  }
}