import React from 'react';
import Stories from '../components/Stories';
import { firebaseConnect, withFirebase } from 'react-redux-firebase';
import { connect } from 'react-redux';
import { compose } from 'redux';


class StoriesContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      show: false,
    };
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

  buttonClick = e => {
    if(this.state.show===false){
      this.setState({show: true})
    }else{
      this.setState({show: false})
    }
  }

  render() {
    console.log(this.state)
    const storiesList = this.props.board.stories ? Object.keys(this.props.board.stories).map(storyId => ({...this.props.board.stories[storyId], id: storyId})) : []
    if(!this.state.show){
      return (
          <button className="btn btn-primary" onClick={this.buttonClick}>Show Stories</button>
        ) 
    }else{
      return (
        <div>
          <Stories
            buttonClick={this.buttonClick}
            handleClick={this.handleClick}
            stories={storiesList}
            handleSubmit={this.handleSubmit}
          /> 
        </div>
      );
    
  }
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