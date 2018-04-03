import React, { Component } from 'react';
import RouteHook from 'react-route-hook';
import { Redirect, Switch } from 'react-router-dom';

import RegisterUserContainer from './RegisterUserContainer';
import CreateSessionContainer from './CreateSessionContainer';
import GameContainer from './GameContainer';
import ShowResults from './ShowResults';
import StoryResultsContainer from './StoryResultsContainer';

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
            <RouteHook path="/:boardname/results" component={ShowResults} />
            <RouteHook
              path="/:boardname/storyresults"
              component={StoryResultsContainer}
            />
            <RouteHook path="/:boardname/game" component={GameContainer} />
            <RouteHook
              path="/:boardname/register"
              component={RegisterUserContainer}
            />
            <Redirect from="/" to="/createsession" />
          </Switch>
        </main>
      </div>
    );
  }
}
