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
    console.log("board",this.props.board.stories)
    const board = Object.values(this.props.board.stories)
    console.log("value", e.target.value)
    board.map(data => {
        if(data.storyName == e.target.value){
            
            console.log(data)
        }
    })
    const boardName = this.props.match.params.boardname

    this.props.firebase.remove(`${boardName}/stories/storyName/${e.target.value}`)
  }

  render() {
    return (
      <Stories
        handleClick={this.handleClick}
        stories={Object.values(this.props.board.stories || [])}
        handleSubmit={this.handleSubmit}
      />
    );
  }
}

export default compose(
  firebaseConnect(props => [
    { path: `${props.match.params.boardname}/stories` }, // string equivalent 'todos'
  ]),
  connect((state, props) => ({
    board: state.firebase.data[props.match.params.boardname] || {},
  })),
)(StoriesContainer);