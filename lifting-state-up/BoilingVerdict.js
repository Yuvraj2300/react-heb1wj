import react, { Component } from 'react';

export default class BoilingVerdict extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <React.Fragment>
        if(props.clecius>=100){
          <p>The water is boiling</p>
        }else{
          <p>The water is not boiling</p>
        }
      </React.Fragment>
    );
  }
}
