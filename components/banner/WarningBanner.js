import React, { Component } from 'react';

export default class WarningBanner extends Component {
  render() {
    if(!this.props.warn){
      return null;
    }

    return (
      <React.Fragment>
        <div className="warning">
          Warning!
      </div>
      </React.Fragment>
    );
  }
}