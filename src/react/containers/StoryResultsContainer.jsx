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
    this.state = { active: true, selectedCard: '' };
    this.handleClickButton = this.handleClickButton.bind(this);
    this.nextStory = this.nextStory.bind(this);
    this.voteAgain = this.voteAgain.bind(this);
  }

  handleClickButton(card) {
    // card = Number(card);
    this.setState({ selectedCard: card });
    this.setState({ active: false });
  }

  nextStory(storyId) {
    const boardName = this.props.match.params.boardname;
    this.props.firebase
      .set(`${boardName}/stories/${storyId}/card`, this.state.selectedCard)
      .then(() => this.props.firebase.remove(`${boardName}/selectedStory`))
      .then(() =>
        this.usersList.forEach(user =>
          this.props.firebase.remove(`${boardName}/users/${user.id}/card`),
        ),
      )
      .then(() =>
        this.props.history.push(`/${this.props.match.params.boardname}/game`),
      );
  }

  voteAgain() {
    this.usersList.forEach(user =>
      this.props.firebase.remove(
        `${this.props.match.params.boardname}/users/${user.id}/card`,
      ),
    );

    this.props.history.push(`/${this.props.match.params.boardname}/game`);
  }

  render() {
    const storiesList = this.props.board.stories
      ? Object.keys(this.props.board.stories).map(storyId => ({
          ...this.props.board.stories[storyId],
          id: storyId,
        }))
      : [];
    this.usersList = this.props.board.users
      ? Object.keys(this.props.board.users).map(userId => ({
          ...this.props.board.users[userId],
          id: userId,
        }))
      : [];

    var card = !isLoaded(this.props.board)
      ? 'Loading'
      : isEmpty(this.props.board) ? undefined : Moda(CardList(this.usersList));

    console.log('usersList', this.usersList);

    return (
      <StoryResults
        story={
          this.props.board.selectedStory ? this.props.board.selectedStory : ''
        }
        cardModa={card}
        handleClickButton={this.handleClickButton}
        nextStory={this.nextStory}
        voteAgain={this.voteAgain}
        active={this.state.active}
      />
    );
  }
}

export default compose(
  firebaseConnect(props => [
    { path: `${props.match.params.boardname}/stories` },
    { path: `${props.match.params.boardname}/selectedStory` },
    { path: `${props.match.params.boardname}/users` }, // string equivalent 'todos'
  ]),
  connect((state, props) => ({
    board: state.firebase.data[props.match.params.boardname] || {},
  })),
)(StoryResultsContainer);
