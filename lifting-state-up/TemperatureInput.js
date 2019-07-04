import React, { Component } from 'react';

export default class TemperatureInput extends Component {
  constructor(props) {
    super(props);
    this.state = { temperature: '' };
  }

  handleChange = (e) => {
    this.setState({ temperature: e.target.value });
  }

  render() {
    return (
      <React.Fragment>
      </React.Fragment>
    );
  }
}