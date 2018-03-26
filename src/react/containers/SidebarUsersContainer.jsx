import React from 'react';
import SidebarUsers from '../components/SidebarUsers';
import { firebaseConnect, withFirebase } from 'react-redux-firebase';
import { connect } from 'react-redux';
import { compose } from 'redux';

class SidebarUsersContainer extends React.Component {
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

    return <SidebarUsers users={usersList} state={this.state} />;
  }
}

export default compose(
  firebaseConnect(props => [
    { path: `${props.match.params.boardName}/users` }, // string equivalent 'todos'
  ]),
  connect((state, props) => ({
    board: state.firebase.data[props.match.params.boardName] || {},
  })),
)(SidebarUsersContainer);
