import React, { Component } from 'react';

export default class FlavorForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value='coconut'
    };
  }

  handleChange = (event) => {
    this.setState({
      value: event.target.value
    });
  }

  handleSubmit = (event) => {
    alert('Value for the dropdown changed to :' + event.target.value);
    event.preventDefault();
  }

  render() {
    return (
      <React.Fragment>
        <form onSubmit={this.handleSubmit}>
        <label></label>

        </form>
      </React.Fragment>
    );
  }
}