import React, { Component } from 'react';
import Toggle from './components/Toggle';
import LoginModule from './components/LoginModule';


export default class App extends Component {
  render() {
    return (
      <React.Fragment>
      <div>
      This is a component.. App
      </div>
      <Toggle />
      <LoginModule />
      </React.Fragment>
    );
  }
}