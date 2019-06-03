import React, { Component } from 'react';

export default class Toggle {
  constructor(props) {
    super(props)
    this.state = {
      isToggleOn: true
    }

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(state => ({
      isToggleOn: !state.isToggleOn
    }));
  }

  render() {
    return (
      <React.Fragment>
        <button onClick={handleClick}>
        {this.state.isToggleOn ? 'ON' : 'OFF'}
        </button>
      </React.Fragment>
    );
  }
}