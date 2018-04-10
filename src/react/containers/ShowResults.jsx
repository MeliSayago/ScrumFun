import React from 'react';
import { firebaseConnect, withFirebase } from 'react-redux-firebase';
import { connect } from 'react-redux';
import { compose } from 'redux';

import Results from './ResultsContainer';
import StoryResultContainer from './StoryResultsContainer';

class ResultsContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.board.status === 'voting') {
      this.props.history.push(`/${this.props.match.params.boardname}/game`);
    }
  }

  render() {
    return (
      <div>
        <Results {...this.props} />
        <StoryResultContainer {...this.props} />
      </div>
    );
  }
}

export default compose(
  firebaseConnect(props => [
    { path: `${props.match.params.boardname}/stories` },
    { path: `${props.match.params.boardname}/users` },
    { path: `${props.match.params.boardname}/status` },
    { path: `${props.match.params.boardname}/scrumMaster` },
    { path: `${props.match.params.boardname}/selectedStory` }, // string equivalent 'todos'
  ]),
  connect((state, props) => ({
    board: state.firebase.data[props.match.params.boardname] || {},
    userId: state.firebase.auth.uid,
  })),
)(ResultsContainer);
