import React from 'react';
import { firebaseConnect, withFirebase } from 'react-redux-firebase';
import { connect } from 'react-redux';
import { compose } from 'redux';
import Cards from '../components/Cards';
import {
  DragonballCards,
  SimpsonsCards,
  FibonacciCards,
} from '../Card/CardList';

class CardsContainer extends React.Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(card) {
    const boardName = this.props.match.params.boardname;
    this.props.firebase.set(
      `/${boardName}/users/${this.props.userId}/card`,
      card,
    );
  }

  render() {
    const { theme } = this.props.board;

    let CardList;

    if (theme === 'dragonBall') {
      CardList = DragonballCards;
    } else if (theme === 'simpsons') {
      CardList = SimpsonsCards;
    } else if (theme === 'fibonacci') {
      CardList = FibonacciCards;
    }
    return (
      <Cards
        handleClick={this.handleClick}
        CardList={CardList ? CardList : []}
      />
    );
  }
}

export default compose(
  firebaseConnect(props => [
    { path: `${props.match.params.boardname}/users` }, // string equivalent 'todos'
    { path: `${props.match.params.boardname}` },
  ]),
  connect((state, props) => ({
    board: state.firebase.data[props.match.params.boardname] || {},
    userId: state.firebase.auth.uid,
  })),
)(CardsContainer);
