import React, { Component } from 'react';
import Greeting from './Greeting';
import LoginButton from './ln-lg-btn/LoginButton';
import LogoutButton from './ln-lg-btn/LogoutButton';

export default class LoginModule extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false
    }
  }

  handleLoginClick() {
    this.setState({ isLoggedIn: true });
  }

  handleLogoutClick() {
    this.setState({ isLoggedIn: false });
  }


  render() {
    const isLoggedIn = this.state.isLoggedIn;
    console.log(isLoggedIn);
    let button;
   
  
    if (isLoggedIn) {
      button = <LogoutButton onClick={(e) =>
        this.handleLogoutClick(e)
      } />
    } else {
      button = <LoginButton onClick={(e) =>
        this.handleLoginClick(e)
      } />
    }

    return (
      <React.Fragment>
        <div>
          <Greeting isLoggedIn={this.state.isLoggedIn} />
          {button}
        </div>
      </React.Fragment>
    );
  }
}