import React from 'react';

import format from '../../utils/formatTime';

export default class Timer extends React.Component {
  componentWillMount() {
    this.time = '00:00:00';
  }
  componentWillUpdate(prop) {
    this.time = format(prop.time);
  }
  render() {
    return <h3>{this.time}</h3>;
  }
}
