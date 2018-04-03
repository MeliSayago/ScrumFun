import React from 'react'
import { firebaseConnect, withFirebase } from 'react-redux-firebase';
import { connect } from 'react-redux';
import { compose } from 'redux';
import Cards from '../components/Cards'

class CardsContainer extends React.Component {
    constructor() {
        super()
        this.handleClick = this.handleClick.bind(this);
      }

handleClick (card) {
    const boardName = this.props.match.params.boardname;
    this.props.firebase.set(`/${boardName}/users/${this.props.userId}/card`, card)
}
 
render(){
    const usersList = this.props.board.users 
    ? Object.keys(this.props.board.users).map(userId => ({
        ...this.props.board.users[userId], 
        id:userId}
    ))
    :[];

    return(
        <Cards 
        handleClick={this.handleClick}
        />
    )
}

}

export default compose(
    firebaseConnect(props => [
      { path: `${props.match.params.boardname}/users` }, // string equivalent 'todos'
    ]),
    connect((state, props) => ({
      board: state.firebase.data[props.match.params.boardname] || {},
      userId: state.firebase.auth.uid
    })),
  )(CardsContainer);