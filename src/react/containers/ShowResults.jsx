import React from 'react';
import { firebaseConnect, withFirebase } from 'react-redux-firebase';
import { connect } from 'react-redux';
import { compose } from 'redux';

import Results from './ResultsContainer';
import StoryResultContainer from './StoryResultsContainer'

class ResultsContainer extends React.Component {
  constructor(props) {
    super(props);
    }

  
  render() {
    return (
        <div>
        <div>
            <Results {...this.props}/>
        </div>
        <div>
            
            <StoryResultContainer {...this.props}/>
        </div>
        </div>
    )
  }
}

export default compose(
  firebaseConnect(props => [
    { path: `${props.match.params.boardname}/users` },
    { path: `${props.match.params.boardname}/stories` } // string equivalent 'todos'
  ]),
  connect((state, props) => ({
    board: state.firebase.data[props.match.params.boardname] || {},
  })),
)(ResultsContainer);
