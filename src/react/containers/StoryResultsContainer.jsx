import React from 'react';
import StoryResults from '../components/StoryResults';
import { firebaseConnect, withFirebase } from 'react-redux-firebase';
import { connect } from 'react-redux';
import { compose } from 'redux';

class StoryResultsContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const storiesList = this.props.board.stories
      ? Object.keys(this.props.board.stories).map(storyId => ({
          ...this.props.board.stories[storyId],
          id: storyId,
        }))
      : [];
    const usersList = this.props.board.users
      ? Object.keys(this.props.board.users).map(userId => ({
          ...this.props.board.users[userId],
          id: userId,
        }))
      : [];
    return <StoryResults stories={storiesList} users={usersList} />;
  }
}

export default compose(
  firebaseConnect(props => [
    { path: `${props.match.params.boardname}` }, // string equivalent 'todos'
  ]),
  connect((state, props) => ({
    board: state.firebase.data[props.match.params.boardname] || {},
  })),
)(StoryResultsContainer);
