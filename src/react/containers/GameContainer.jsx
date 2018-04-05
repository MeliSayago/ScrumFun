import React from 'react';
import Results from '../components/Results';
import { firebaseConnect, withFirebase } from 'react-redux-firebase';
import { connect } from 'react-redux';
import { compose } from 'redux';
import StoriesNavbarContainer from './StoriesNavbarContainer'
import CardsContainer from './CardsContainers'
import SidebarUsersContainer from './SidebarUsersContainer'
import Sidebar from 'react-sidebar';

const mql = window.matchMedia(`(min-width: 800px)`);

class GameContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mql: mql,
      docked: props.docked,
      open: props.open
    };
    this.mediaQueryChanged = this.mediaQueryChanged.bind(this);
    this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
  }
  
  onSetSidebarOpen(open) {
    this.setState({sidebarOpen: open});
  }

  componentWillMount() {
    mql.addListener(this.mediaQueryChanged);
    this.setState({mql: mql, sidebarDocked: mql.matches});
  }

  componentWillUnmount() {
    this.state.mql.removeListener(this.mediaQueryChanged);
  }

  mediaQueryChanged() {
    this.setState({sidebarDocked: this.state.mql.matches});
  }

  render() {
    var sidebarContent = <StoriesNavbarContainer {...this.props}/>
    var sidebarProps = {
      sidebar: this.state.sidebarOpen,
      docked: this.state.sidebarDocked,
      onSetOpen: this.onSetSidebarOpen
    }

    const theme = {
      dragonBall: "url('http://images.pushsquare.com/news/2015/08/dragon_ball_xenoverse_dares_you_to_take_part_in_its_huge_online_tournament/attachment/0/original.jpg')",
      simpsons: "url('http://i.ngenespanol.com/dam/tbg/traveler/lugares/18/02/07/springfield-los-simpson-p.png.imgw.1280.1280.png')",
      fibonacci: "url('http://images.e-flux-systems.com/fibonacci-spiral-galaxy2000px.jpg,2000x2000')"
    }
    let back 
    if(this.props.board.theme == "dragonBall"){
      back = theme.dragonBall
    }else if(this.props.board.theme == "simpsons"){
      back = theme.simpsons
    }else if(this.props.board.theme ){back = theme.fibonacci}
      
    return (
      <Sidebar sidebar={sidebarContent}
               open={this.state.sidebarOpen}
               docked={this.state.sidebarDocked}
               onSetOpen={this.onSetSidebarOpen}
               style={{width:"90%"}}>
        <div style={{backgroundImage:back,backgroundSize:"100% 100%"}}>
          <CardsContainer {...this.props}/>
          <SidebarUsersContainer {...this.props}/>
        </div>   
      </Sidebar>
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
  
