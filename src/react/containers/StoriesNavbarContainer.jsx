import React from 'react';
// import Stories from '../components/Stories';
import {
  firebaseConnect,
  withFirebase,
  isEmpty,
  isLoaded,
} from 'react-redux-firebase';
import { connect } from 'react-redux';
import { compose } from 'redux';
import StoriesNavbar from '../components/StoriesNavbar';

class StoriesContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      collapsed: true,
    };
    this.fnSelectStory = this.fnSelectStory.bind(this);
  }

  handleSubmit = e => {
    e.preventDefault();
    const boardName = this.props.match.params.boardname;
    if (e.target[0].value.trim() !== '') {
      this.props.firebase.push(`${boardName}/stories`, {
        [e.target[0].name]: e.target[0].value,
      });
    }

    e.target.reset();
  };

  handleClick = e => {
    const boardName = this.props.match.params.boardname;
    this.props.firebase.remove(`${boardName}/stories/${e.target.id}`);
    if (e.target.id === this.props.board.selectedStory.id) {
      this.props.firebase
        .remove(`${boardName}/selectedStory`)
        .then(() => this.selectStory());
    }
  };

  fnSelectStory = selectedStory => {
    console.log(selectedStory);
    const boardName = this.props.match.params.boardname;
    this.props.firebase.set(`${boardName}/selectedStory`, selectedStory);
  };

  toggleNavbar = e => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  defaultStory(story) {
    if (story.card == 0) {
      return false;
    }
    return !story.card;
  }

  selectStory() {
    var selectedStory = this.storiesList.filter(this.defaultStory);

    if (selectedStory.length) {
      const boardName = this.props.match.params.boardname;
      this.props.firebase.set(`${boardName}/selectedStory`, selectedStory[0]);
    }
    return selectedStory[0];
  }

  render() {
    this.storiesList = this.props.board.stories
      ? Object.keys(this.props.board.stories).map(storyId => ({
          ...this.props.board.stories[storyId],
          id: storyId,
        }))
      : [];

    if (isLoaded(this.props.board) && !this.props.board.selectedStory) {
      this.selectStory();
    }
    console.log('board', this.props.board);
    return (
      <div>
        <StoriesNavbar
          state={this.state}
          toggleNavbar={this.toggleNavbar}
          handleClick={this.handleClick}
          stories={this.storiesList}
          handleSubmit={this.handleSubmit}
          selectStory={this.props.board.selectedStory}
          fnSelectStory={this.fnSelectStory}
        />
      </div>
    );
  }
}
export default compose(
  firebaseConnect(props => [
    { path: `${props.match.params.boardname}/stories` }, // string equivalent 'todos'
    { path: `${props.match.params.boardname}/selectedStory` }, // string equivalent 'todos'
  ]),
  connect((state, props) => {
    console.log(state);
    return {
      board: state.firebase.data[props.match.params.boardname] || {},
    };
  }),
)(StoriesContainer);
