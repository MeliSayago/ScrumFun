import React from 'react';
import SidebarUsers from '../components/SidebarUsers';
import { firebaseConnect, withFirebase } from 'react-redux-firebase';
import { connect } from 'react-redux';
import { compose } from 'redux';

export default class SidebarUsersContainer extends React.Component {
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

    return (
      <SidebarUsers
        users={usersList}
        state={this.state}
        scrumMasters={scrumList}
      />
    );
  }
}
