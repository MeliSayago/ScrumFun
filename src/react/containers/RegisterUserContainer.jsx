import React, { Component } from 'react';
import RegisterUser from '../components/RegisterUser';
import { firebaseConnect, withFirebase } from 'react-redux-firebase';

class RegisterUserContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      rol: 'develop',
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    console.log('aca estoy', this.props.history);
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  onSubmit(e) {
    e.preventDefault();
    this.props.firebase.push('users', this.state);
    this.props.firebase
      .auth()
      .signInAnonymously()
      .then(() => this.props.history.push('/game'));
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
export default withFirebase(RegisterUserContainer);
