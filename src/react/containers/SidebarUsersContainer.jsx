import React from 'react';
import SidebarUsers from '../components/SidebarUsers';
import { firebaseConnect, withFirebase } from 'react-redux-firebase';
import { connect } from 'react-redux';
import { compose } from 'redux';

class SidebarUsersContainer extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <SidebarUsers
        board={Object.values(this.props.board)}
        handleSubmit={this.handleSubmit}
      />
    );
  }
}

export default compose(
  firebaseConnect(props => [
    { path: 'board' }, // string equivalent 'todos'
  ]),
  connect((state, props) => ({
    board: state.firebase.data.board || {},
  })),
)(SidebarUsersContainer);
