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
    const temperature= this.state.temperature;
    return (
      <React.Fragment>
      </React.Fragment>
    );
  }
}