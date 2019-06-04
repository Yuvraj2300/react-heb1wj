import React, { Component } from 'react';

export default class LogoutButton extends Component{

  render(){
    return (
      <React.Fragment>
         <button onClick={this.props.onClick}>Log Out</button>
      </React.Fragment>
    );
  }
}