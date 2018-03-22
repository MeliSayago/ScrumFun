import React, { Component } from 'react';
import RouteHook from 'react-route-hook';
//import store from '../store';
import { Switch } from 'react-router-dom';

import RegisterUserContainer from './RegisterUserContainer';
import CreateSesionContainer from './CreateSesionContainer';
import StoriesContainer from './StoriesContainer';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <main role="main" className="container-fluid">
          <Switch>
            <RouteHook
              path="/home"
              component={RegisterUserContainer}
              //onEnter={onUserProfileEnter}
            />
            <RouteHook
              path="/createsesion"
              component={CreateSesionContainer}
            />
            <RouteHook
              path="/game"
              component={StoriesContainer}
            />
          </Switch>
        </main>
      </div>
    );
  }
}
