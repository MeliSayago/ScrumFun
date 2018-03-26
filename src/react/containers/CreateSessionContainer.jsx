import React from 'react';
import CreateSession from '../components/CreateSession';
import { firebaseConnect, withFirebase } from 'react-redux-firebase';
import { connect } from 'react-redux';
import { compose } from 'redux';

class CreateSessionContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      boardName: '',
      scale: '',
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  onSubmit(e) {
    e.preventDefault();
    // this.props.firebase.push('board', this.state).then((r) => 
    this.props.history.push(`/${this.state.boardName}/register`)
    // );
  }

  render() {
    return <CreateSession onChange={this.onChange} onSubmit={this.onSubmit} />;
  }
}

export default compose(
  firebaseConnect(props => [
    { path: 'board' }, // string equivalent 'todos'
  ]),
  connect((state, props) => ({
    board: state.firebase.data.board || {},
  })),
)(CreateSessionContainer);