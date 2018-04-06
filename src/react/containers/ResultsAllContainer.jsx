import React from 'react'
import { firebaseConnect } from 'react-redux-firebase';
import { connect } from 'react-redux'
import { compose } from 'redux';
import ResultsAll from '../components/ResultsAll'


class ResultsAllContainer extends React.Component {

    

    render(){
        const storiesList = this.props.board.stories 
        ? Object.keys(this.props.board.stories).map(storyId => ({
        ...this.props.board.stories[storyId], 
        id: storyId})) 
        : []

        return(
            <ResultsAll 
            storiesList={storiesList}/>

        )
    }

}

export default compose(
    firebaseConnect(props => [
      { path: `${props.match.params.boardname}`}, // string equivalent 'todos'
    ]),
    connect((state, props) => ({
      board: state.firebase.data[props.match.params.boardname] || {},
    })),
  )(ResultsAllContainer);