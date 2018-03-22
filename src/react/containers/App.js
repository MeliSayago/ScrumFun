import React, { Component } from 'react';
import RouteHook from 'react-route-hook';
//import store from '../store';
import { Redirect, Switch } from 'react-router-dom';

import RegisterUserContainer from './RegisterUserContainer';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <main role="main" className="container-fluid">
          <Switch>
            <RouteHook path="/home" component={RegisterUserContainer} />
            <Redirect from="/" to="/home" />
          </Switch>
        </main>
      </div>
    );
  }
}
