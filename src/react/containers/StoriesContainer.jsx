import React from 'react'
import Stories from '../components/Stories'
import { firebaseConnect, withFirebase } from 'react-redux-firebase'

class StoriesContainer extends React.Component {
    constructor(props){
        super(props);
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.firebase.push('stories',{[e.target[0].name]:e.target[0].value})
        e.target.reset();
    }

    render(){
        return(
            <Stories handleSubmit={this.handleSubmit}/>
        )
    }

}

export default withFirebase(StoriesContainer)