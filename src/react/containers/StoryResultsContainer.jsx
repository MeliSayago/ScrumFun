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

export default class StoryResultsContainer extends React.Component {
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
        this.scrumList.forEach(user =>
          this.props.firebase.remove(
            `${boardName}/scrumMaster/${user.id}/card`,
          ),
        ),
      )
      .then(() =>
        this.props.firebase.set(
          `/${this.props.match.params.boardname}/status`,
          'voting',
        ),
      );
  }

  voteAgain() {
    this.usersList.forEach(user =>
      this.props.firebase.remove(
        `${this.props.match.params.boardname}/users/${user.id}/card`,
      ),
    );
    this.scrumList.forEach(user =>
      this.props.firebase.remove(
        `${this.props.match.params.boardname}/scrumMaster/${user.id}/card`,
      ),
    );
    this.props.firebase.set(
      `/${this.props.match.params.boardname}/status`,
      'voting',
    );
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
    this.scrumList = this.props.board.scrumMaster
      ? Object.keys(this.props.board.scrumMaster).map(scrumId => ({
          ...this.props.board.scrumMaster[scrumId],
          id: scrumId,
        }))
      : [];
      const theme = this.props.board.theme
    // PORQUE TRAE {card: {...}} el primer board.users ???!!
    // console.log('KEYS', Object.keys(this.props.board.users || []));
    // console.log('BOARD.USER', this.props.board.users);
    // console.log('Userlist', this.usersList);
    // console.log('scrumList', this.scrumList);
    var card = !isLoaded(this.props.board)
      ? 'Loading'
      : isEmpty(this.props.board)
        ? undefined
        : Moda(CardList(this.usersList.concat(this.scrumList)));

    return (
      <StoryResults
        story={this.props.board.selectedStory ? this.props.board.selectedStory : ''}
        users={this.usersList}
        cardModa={card}
        handleClickButton={this.handleClickButton}
        nextStory={this.nextStory}
        voteAgain={this.voteAgain}
        active={this.state.active}
        scrumMaster={this.scrumList}
        uid={this.props.userId}
      />
    );
  }
}
