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
