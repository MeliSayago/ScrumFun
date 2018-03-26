import React, { Component } from 'react';
import RouteHook from 'react-route-hook';
import { Redirect, Switch } from 'react-router-dom';

import RegisterUserContainer from './RegisterUserContainer';
import CreateSessionContainer from './CreateSessionContainer';
import StoriesContainer from './StoriesContainer';
import SidebarUsersContainer from './SidebarUsersContainer';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <main role="main" className="container-fluid">
          <Switch>
            <RouteHook
              path="/createsession"
              component={CreateSessionContainer}
            />
            <RouteHook path="/game" component={StoriesContainer} />
            <RouteHook
              path="/:boardName/register"
              component={RegisterUserContainer}
            />
            <RouteHook path="/sidebar" component={SidebarUsersContainer} />
            <Redirect from="/" to="/createsession" />
          </Switch>
        </main>
      </div>
    );
  }
}
