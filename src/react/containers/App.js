import React, { Component } from 'react';
import RouteHook from 'react-route-hook';
import { Redirect, Switch } from 'react-router-dom';

import RegisterUserContainer from './RegisterUserContainer';
import CreateSessionContainer from './CreateSessionContainer';
import StoriesContainer from './StoriesContainer';
import SidebarUsersContainer from './SidebarUsersContainer';
import CardsContainer from './CardsContainers';
import Carousel from './Carrusel'


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
            <RouteHook exact path="/:boardname" component={StoriesContainer} />
            <RouteHook 
              path="/:boardname/cards" 
              component={CardsContainer} />
            <RouteHook
              path="/:boardname/register"
              component={RegisterUserContainer}
              />
            <RouteHook
              exact
              path="/cards" 
              component={CardsContainer}
            />
            <RouteHook
              path="/:boardName/sidebar"
              component={SidebarUsersContainer}
            />
            <Redirect from="/" to="/createsession" />
          </Switch>
        </main>
      </div>
    );
  }
}
