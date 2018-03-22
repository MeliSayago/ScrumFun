import React, { Component } from 'react';
import RegisterUser from '../components/RegisterUser';
import * as firebase from 'firebase';

class RegisterUserContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      rol: '',
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  onSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    //aca deberia agregar a la db el user
  }

  render() {
    return (
      <RegisterUser
        onChange={this.onChange}
        state={this.state}
        onSubmit={this.onSubmit}
      />
    );
  }
}

export default RegisterUserContainer;
