import React, { Component } from 'react'

export default class EssayForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'Writh shit here.'
    }
  };

  handleChange = (event) => {
    this.setState({
      value: event.target.value
    });
  }

  handleSubmit = (event) => {
    alert('text submitted : ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <React.Fragment>
        <form onSubmit={this.handleSubmit}>
          <label>
            Essay:
      <textarea value={this.state.value} onChange={this.handleChange} />
          </label>
        </form>
      </React.Fragment>
    );
  }
}