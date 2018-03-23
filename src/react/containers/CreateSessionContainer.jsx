<<<<<<< HEAD:src/react/containers/CreateSessionContainer.jsx
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
=======
import React from 'react';
import CreateSesion from '../components/CreateSesion';

export default class CreateSesionContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      boardName: '',
      scale: '',
    };
    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  render() {
    return <CreateSesion onChange={this.onChange} />;
  }
}
>>>>>>> d81d223932775c373ae31a9cb13a0fc35bcf630c:src/react/containers/CreateSesionContainer.jsx
