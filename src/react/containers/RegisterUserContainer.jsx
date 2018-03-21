import React, { Component } from 'react';
import RegisterUser from '../components/RegisterUser';

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
    //const data = Object.assign({}, this.state); la data va a ser lo que quiera adherir a la db
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
