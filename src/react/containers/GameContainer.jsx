import React from 'react'
import Cards from './CardsContainers';
import StoriesContainer from './StoriesContainer'
import SidebarContainer from './SidebarUsersContainer'
import { firebaseConnect, withFirebase } from 'react-redux-firebase';
import { connect } from 'react-redux';
import { compose } from 'redux';

class GameContainer extends React.Component {

    render(){
        return(
            <div>
                <div>
                    <StoriesContainer {...this.props}/>
                </div>
                <div>
                    <Cards {...this.props}/>
                </div>
                <div>
                    <SidebarContainer {...this.props}/>
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
  