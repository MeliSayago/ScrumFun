import React from 'react';
import { firebaseConnect, withFirebase } from 'react-redux-firebase';
import { connect } from 'react-redux';
import { compose } from 'redux';

import Results from './ResultsContainer';
import StoryResultContainer from './StoryResultsContainer';

class ResultsContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.board.status === 'voting') {
      this.props.history.push(`/${this.props.match.params.boardname}/game`);
    }
  }

  render() {
    const theme = {
      dragonBall:
        "url('http://images.pushsquare.com/news/2015/08/dragon_ball_xenoverse_dares_you_to_take_part_in_its_huge_online_tournament/attachment/0/original.jpg')",
      simpsons:
        "url('http://i.ngenespanol.com/dam/tbg/traveler/lugares/18/02/07/springfield-los-simpson-p.png.imgw.1280.1280.png')",
      fibonacci:
        "url('http://images.e-flux-systems.com/fibonacci-spiral-galaxy2000px.jpg,2000x2000')",
    };
    let back;
    if (this.props.board.theme == 'dragonBall') {
      back = theme.dragonBall;
    } else if (this.props.board.theme == 'simpsons') {
      back = theme.simpsons;
    } else if (this.props.board.theme) {
      back = theme.fibonacci;
    }
    return (
      <div style={{ backgroundImage: back, backgroundSize: '100% 100%' }}>
        <Results {...this.props} />
        <StoryResultContainer {...this.props} />
      </div>
    );
  }
}

export default compose(
  firebaseConnect(props => [
    { path: `${props.match.params.boardname}/stories` },
    { path: `${props.match.params.boardname}/users` },
    { path: `${props.match.params.boardname}/status` },
    { path: `${props.match.params.boardname}/scrumMaster` },
    { path: `${props.match.params.boardname}/selectedStory` },
    { path: `${props.match.params.boardname}/theme` },
    // string equivalent 'todos'
  ]),
  connect((state, props) => ({
    board: state.firebase.data[props.match.params.boardname] || {},
    userId: state.firebase.auth.uid,
  })),
)(ResultsContainer);
