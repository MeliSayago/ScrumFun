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
    console.log(this.props.board.users);
    return <SidebarUsers board={Object.values(this.props.board)} />;
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
