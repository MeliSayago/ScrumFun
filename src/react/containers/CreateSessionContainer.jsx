import React from 'react'
import CreateSession from '../components/CreateSession'


export default class CreateSessionContainer extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            boardName : "",
            scale : ""
        }
        this.onChange = this.onChange.bind(this);
    }

    onChange(e){
        e.preventDefault()
        this.setState({
            [e.target.name] : e.target.value
        })
    }
   
    render(){
        console.log(this.state)
        return (
            <CreateSession
            onChange={this.onChange}
            />
        )
    }
}