import React, { Component } from 'react';
import RouteHook from 'react-route-hook';
//import store from '../store';
import { Redirect, Switch } from 'react-router-dom';

import RegisterUserContainer from './RegisterUserContainer';
import CreateSessionContainer from './CreateSessionContainer';
import StoriesContainer from './StoriesContainer';
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
            <RouteHook 
              path="/carousel" 
              component={Carousel} 
            />
            <RouteHook 
              path="/cards" 
              component={CardsContainer} 
            />
            <RouteHook
              exact
              path="/:boardname/register"
              component={RegisterUserContainer}
              />
            <RouteHook
              exact
              path="/cards" 
              component={CardsContainer}
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
