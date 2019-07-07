import React, { Component } from 'react';

export default class BoilingVerdict extends Component {
  constructor(props) {
    super(props);
  }

  // verdict = (props)=>{
  //    if(props.clecius>=100){
  //           <p>The water is boiling</p>
  //         }else{
  //           <p>The water is not boiling</p>
  //         }
  // }

  render() {

    if (this.props.celsius >= 100) {
      return (<p>The water is boiling</p>);
    } else {
      return(<p>The water is not boiling</p>);
    }
  }
}
