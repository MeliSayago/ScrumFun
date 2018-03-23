import React from 'react';
import Stories from '../components/Stories';
import { firebaseConnect, withFirebase } from 'react-redux-firebase';
import { compose } from 'redux';
import { connect } from 'react-redux';

class StoriesContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.firebase.push('board/-L8Eqq3Ownr-_66t4DSK', {
      [e.target[0].name]: e.target[0].value,
    });
    e.target.reset();
  };

  render() {
    console.log('holiiiiia', this.props.board);
    return <Stories handleSubmit={this.handleSubmit} />;
  }
}

export default compose(
  firebaseConnect(props => [
    { path: 'board' }, // string equivalent 'todos'
  ]),
  connect((state, props) => ({
    board: state.firebase.data.board,
  })),
)(StoriesContainer);
