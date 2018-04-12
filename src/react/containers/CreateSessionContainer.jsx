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
      theme: '',
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  onChange(e) {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  onSubmit(e) {
    e.preventDefault();
    this.props.history.push(`/${this.state.boardName}/register`);
    this.props.firebase.set(`${this.state.boardName}/theme`, this.state.theme);
  }

  handleClick(theme) {
    this.setState({
      theme,
    });
  }

  render() {
    return (
      <CreateSession
        onChange={this.onChange}
        onSubmit={this.onSubmit}
        handleClick={this.handleClick}
      />
    );
  }
}

export default compose(
  firebaseConnect(props => [{ path: 'board' }]),
  connect((state, props) => ({
    board: state.firebase.data.board || {},
  })),
)(CreateSessionContainer);
