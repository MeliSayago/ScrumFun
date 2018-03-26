import React, { Component } from 'react';
import RouteHook from 'react-route-hook';
//import store from '../store';
import { Redirect, Switch } from 'react-router-dom';

import RegisterUserContainer from './RegisterUserContainer';
import CreateSessionContainer from './CreateSesionContainer';
import StoriesContainer from './StoriesContainer';
import CardsContainer from './CardsContainers';

import StoriesList from '../components/StoriesList'

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
            <RouteHook
              exact
              path="/:boardname/register"
              component={RegisterUserContainer}
            />
            <RouteHook 
              path="/:boardname" 
              component={StoriesContainer} 
            />
            <Redirect 
              from="/" 
              to="/createsession" 
            />
          </Switch>
        </main>
      </div>
    );
  }
}
