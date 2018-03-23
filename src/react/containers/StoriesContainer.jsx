import React from 'react'
import Stories from '../components/Stories'
import { firebaseConnect, withFirebase } from 'react-redux-firebase'
import {connect} from 'react-redux'
import { compose } from 'redux'

class StoriesContainer extends React.Component {
    constructor(){
        super();
        this.state = {
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.firebase.push('stories',{[e.target[0].name]:e.target[0].value})
        e.target.reset();
    }

    render(){
        console.log(this.props.stories)
        return(
            <Stories stories={Object.values(this.props.stories)} handleSubmit={this.handleSubmit}/>
        )
    }
}

export default compose(
    firebaseConnect((props) => [
      { path: 'stories' } // string equivalent 'todos'
    ]),
    connect((state, props) => ({
      stories: state.firebase.data.stories || {}
    }))
  )(StoriesContainer)