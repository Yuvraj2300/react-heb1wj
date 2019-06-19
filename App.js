import React, { Component } from 'react';
import Toggle from './components/Toggle';
import LoginModule from './components/LoginModule';
import Mailbox from './components/Mailbox';
import Page from './components/Page';
import ListKeys from './components/ListKeys';
import NameForm from './components/forms/NameForm';
import EssayForm from './components/forms/EssayForm';
import FlavorForm from './components/forms/FlavorForm';

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
        <e>-------</e>
        <Toggle />
        <e>-------</e>
        <LoginModule />
        <e>-------</e>
        <Mailbox unreadMessages={this.state.unreadMessages}
          isLoggedIn={this.state.isLoggedIn} />
        <e>-------</e>
        <Page />
        <e>-------</e>
        <ListKeys />
        <e>-------</e>
        <NameForm />
        <e>-------</e>
        <EssayForm />
        <FlavorForm />
      </React.Fragment>
    );
  }
}