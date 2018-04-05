import React from 'react';
import StoryResults from '../components/StoryResults';
import {
  firebaseConnect,
  withFirebase,
  isLoaded,
  isEmpty,
} from 'react-redux-firebase';
import { connect } from 'react-redux';
import { compose } from 'redux';

import { StoryIncompleted, CardList, Moda } from '../../utils/utils';

class StoryResultsContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isLoad: false };
    this.handleClickButton = this.handleClickButton.bind(this);
    this.nextStory = this.nextStory.bind(this);
    this.voteAgain = this.voteAgain.bind(this);
  }

  handleClickButton(storyId, card) {
    const boardName = this.props.match.params.boardname;
    this.props.firebase.set(`/${boardName}/stories/${storyId}/card`, card);
    document.getElementById('nextStory').removeAttribute('disabled');
  }

  nextStory() {
    const boardName = this.props.match.params.boardname;
    this.props.history.push(`/${boardName}/game`);
  }

  voteAgain() {
    this.props.history.push(`/${this.props.match.params.boardname}/game`);
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

    var card = !isLoaded(this.props.board)
      ? 'Loading'
      : isEmpty(this.props.board) ? undefined : Moda(CardList(usersList));

    return (
      <StoryResults
        story={
          this.props.board.selectedStory ? this.props.board.selectedStory : ''
        }
        cardModa={card}
        handleClickButton={this.handleClickButton}
        nextStory={this.nextStory}
        voteAgain={this.voteAgain}
      />
    );
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
