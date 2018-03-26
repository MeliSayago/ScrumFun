import React from 'react';
import Stories from '../components/Stories';
import { firebaseConnect, withFirebase } from 'react-redux-firebase';
import { connect } from 'react-redux';
import { compose } from 'redux';

class StoriesContainer extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  handleSubmit = e => {
    e.preventDefault();
    const boardName = this.props.match.params.boardname
    this.props.firebase.push(`${boardName}/stories`, {
      [e.target[0].name]: e.target[0].value,
    });
    e.target.reset();
  };

  

  handleClick = e => {
    const boardName = this.props.match.params.boardname
    this.props.firebase.remove(`${boardName}/stories/${e.target.id}`)
  }

  render() {

    const storiesList = this.props.board.stories ? Object.keys(this.props.board.stories).map(storyId => ({...this.props.board.stories[storyId], id: storyId})) : []

    return (
      <Stories
        handleClick={this.handleClick}
        stories={storiesList}
        handleSubmit={this.handleSubmit}
      />
    );
  }
}

export default compose(
  firebaseConnect(props => [
    {path: `${props.match.params.boardname}/stories` }, // string equivalent 'todos'
  ]),
  connect((state, props) => ({
    board: state.firebase.data[props.match.params.boardname] || {},
  })),
)(StoriesContainer);