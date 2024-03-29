import React, { Component } from 'react';

export default class TemperatureInput extends Component {
  constructor(props) {
    super(props);
   // this.state = { temperature: '' };
  }


  handleChange = (e) => {
    //this.setState({ temperature: e.target.value });
    this.props.onTemperatureChange(e.target.value);
  }

  render() {
const scaleNames = {
  c: 'Celsius',
  f: 'Fahrenheit'
};

    const temperature = this.props.temperature;
    const scale = this.props.scale;
    return (
      <fieldset>
        <legend>Enter temperature in {scaleNames[scale]}:</legend>
        <input value={temperature}
          onChange={this.handleChange} />
      </fieldset>
    );
  }
}