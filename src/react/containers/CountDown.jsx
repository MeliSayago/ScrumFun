import React from 'react';

import Timer from '../components/Timer.jsx';
import Butons from '../components/Butons.jsx';
import Input from '../components/Input.jsx';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { firebaseConnect } from 'react-redux-firebase';

export default class CountDown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
      mlsec: 0,
      input: 0,
      timer: '',
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
    this.props.firebase.set(
      `${this.props.match.params.boardname}/timer`,
      this.state.mlsec,
    );
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
    this.props.firebase.set(`${this.props.match.params.boardname}/timer`, '00');
  }
  submit(input) {
    this.setState({ input });
  }
  render() {
    this.scrumList = this.props.board.scrumMaster
      ? Object.keys(this.props.board.scrumMaster).map(scrumId => ({
          ...this.props.board.scrumMaster[scrumId],
          id: scrumId,
        }))
      : [];

    return (
      <div>
        <Timer time={this.props.board.timer} />
        {this.scrumList[0] && this.props.userId === this.scrumList[0].id ? (
          <div>
            <Butons
              active={this.state.active}
              toggle={this.toggle}
              reset={this.reset}
            />
            <Input submit={this.submit} />
          </div>
        ) : (
          <div />
        )}
      </div>
    );
  }
}
