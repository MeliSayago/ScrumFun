import React from 'react'
import Stories from '../components/Stories'

export default class StoriesContainer extends React.Component {
    constructor(props){
        super(props);
        this.state={
            storyName:"",
        }
        this.onChange = this.onChange.bind(this);
    }

    onChange(e){
        e.preventDefault();
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render(){
        console.log(this.state)
        return(
            <Stories onChange={this.onChange}/>
        )
    }

} 