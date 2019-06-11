import React, { Component } from 'react'
import WarningBanner  from './banner/WarningBanner'

export default class Page extends Component {
  constructor(props) {
    super(props);
    this.state = { showWarning: true };
    this.handleToggleClick = this.handleToggleClick.bind(this);
  }


  handleToggleClick() {
    this.setState(state => ({
      showWarning: !state.showWarning
    }));
  }

  render() {
    return (
      <React.Fragment>
        <div>
          <WarningBanner warn={this.state.showWarning} />
          <button onClick={this.handleToggleClick}>
          {this.state.showWarning ? 'Hide':'Show'}
          </button>
        </div>
      </React.Fragment>
    );
  }
}