import React from 'react';
import Results from '../components/Results';
import { firebaseConnect, withFirebase } from 'react-redux-firebase';
import { connect } from 'react-redux';
import { compose } from 'redux';

class ResultsContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const usersList = this.props.board.users
      ? Object.keys(this.props.board.users).map(userId => ({
          ...this.props.board.users[userId],
          id: userId,
        }))
      : [];

    const scrumList = this.props.board.scrumMaster
      ? Object.keys(this.props.board.scrumMaster).map(scrumId => ({
          ...this.props.board.scrumMaster[scrumId],
          id: scrumId,
        }))
      : [];

    return <Results users={usersList} scrumMaster={scrumList} />;
  }
}

export default compose(
  firebaseConnect(props => [
    { path: `${props.match.params.boardname}/users` },
    { path: `${props.match.params.boardname}/scrumMaster` }, // string equivalent 'todos'
  ]),
  connect((state, props) => ({
    board: state.firebase.data[props.match.params.boardname] || {},
  })),
)(ResultsContainer);
