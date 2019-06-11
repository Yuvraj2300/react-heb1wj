import React, { Component } from 'react';

export default class Mailbox extends Component {
  render() {
    const unreadMessages = this.props.unreadMessages;
    const isLoggedIn  = this.props.isLoggedIn;
    console.log(unreadMessages)
    return (
      <React.Fragment>
        <div>
          <h3>Hello!</h3>
          {unreadMessages > 0 &&
            <h3>
              You have {unreadMessages} unread messages.
          </h3>
          }
        </div>

        <div>
        The user is currently <b>{isLoggedIn ? 'currently':'not'}</b> logged in.
        </div>
      </React.Fragment>
    );
  }
}