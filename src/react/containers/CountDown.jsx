import React from 'react';

import Timer from '../components/Timer.jsx';
import Butons from '../components/Butons.jsx';
import Input from '../components/Input.jsx';

export default class CountDown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
      mlsec: 0,
      input: 0,
    };
    this.timer = this.timer.bind(this);
    this.toggle = this.toggle.bind(this);
    this.reset = this.reset.bind(this);
    this.submit = this.submit.bind(this);
  }
  timer() {
    if (this.state.mlsec > 0) {
      this.setState({
        mlsec: --this.state.mlsec,
      });
    } else {
      this.setState({
        mlsec: 0,
        active: false,
      });
      clearInterval(this.interval);
    }
  }
  toggle() {
    this.setState(
      {
        active: !this.state.active,
      },
      () => {
        if (this.state.active) {
          this.interval = setInterval(this.timer, 10);
          if (this.state.mlsec === 0)
            this.setState({ mlsec: this.state.input });
        } else {
          clearInterval(this.interval);
        }
      },
    );
  }
  reset() {
    this.setState(
      {
        mlsec: 0,
        active: false,
      },
      () => {
        clearInterval(this.interval);
      },
    );
  }
  submit(input) {
    this.setState({ input });
  }
  render() {
    return (
      <div>
        <Timer time={this.state.mlsec} />
        <Butons
          active={this.state.active}
          toggle={this.toggle}
          reset={this.reset}
        />
        <Input submit={this.submit} />
      </div>
    );
  }
}
