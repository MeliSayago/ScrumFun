import React from 'react';
import Results from '../components/Results';
import { firebaseConnect, withFirebase } from 'react-redux-firebase';
import { connect } from 'react-redux';
import { compose } from 'redux';
import StoriesNavbarContainer from './StoriesNavbarContainer'
import CardsContainer from './CardsContainers'
import SidebarUsersContainer from './SidebarUsersContainer'


class GameContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  
  render() {
        return (
        <div>
            <StoriesNavbarContainer {...this.props}/> 
        <div>
            <CardsContainer {...this.props}/>
            <SidebarUsersContainer {...this.props}/>
        </div>
        </div>   
        )
  }
}

export default compose(
    firebaseConnect(props => [
      {path: `${props.match.params.boardname}/stories` },
      {path: `${props.match.params.boardname}/users` }, // string equivalent 'todos'
    ]),
    connect((state, props) => ({
      board: state.firebase.data[props.match.params.boardname] || {},
    })),
  )(GameContainer);
  
