import React, { Component } from 'react';
import RegisterUser from '../components/RegisterUser';
import { firebaseConnect, withFirebase } from 'react-redux-firebase';

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
    const boardName = this.props.match.params.boardname;
    if(this.state.rol == 'Developer'){
      this.props.firebase
        .auth()
        .signInAnonymously()
        .then(data =>
          this.props.firebase.set(`/${boardName}/users/${data.uid}`, this.state),
        );
    }else{
      this.props.firebase
        .auth()
        .signInAnonymously()
        .then(data =>
          this.props.firebase.set(`/${boardName}/Scrum Master/`, this.state),
        );
    }
      this.props.history.push(`/${boardName}/game`);
  }

 
    


  render() {
    const copyUrl = `http://localhost:3000${this.props.location.pathname}`
    return (
      <RegisterUser
        copyUrl={copyUrl}
        onChange={this.onChange}
        state={this.state}
        onSubmit={this.onSubmit}
      />
    );
  }
}
export default withFirebase(RegisterUserContainer);
