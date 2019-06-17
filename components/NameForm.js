import React, { Component } from 'react'

export class NameForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };
  }
}

handleChange = (event) => {
  this.setState({
    value: event.target.value
  });
}

handleSubmit = (event) => {
  alert('A name was submitted: '+this.state.value);
  event.preventDefault
}

render(){
  return(
    <React.Fragment>
    <form onSubmit>
    </React.Fragment>
  );
}