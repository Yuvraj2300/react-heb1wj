import React, { Component } from 'react';
import Toggle from './components/Toggle';
import LoginModule from './components/LoginModule';
import Mailbox from './components/Mailbox';
import Page from './components/Page';

export default class App extends Component {
  state = {
    unreadMessages: 8,
    isLoggedIn: true
  };

  render() {
    return (
      <React.Fragment>
        <div>
          This is a component.. App
      </div>
        <Toggle />
        <LoginModule />
        <Mailbox unreadMessages={this.state.unreadMessages}
          isLoggedIn={this.state.isLoggedIn} />
          <br></br>
        <Page />
      </React.Fragment>
    );
  }
}