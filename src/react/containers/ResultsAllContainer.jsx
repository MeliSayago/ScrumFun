import React from 'react';
import { firebaseConnect } from 'react-redux-firebase';
import { connect } from 'react-redux';
import { compose } from 'redux';
import ResultsAll from '../components/ResultsAll';
import axios from 'axios';

class ResultsAllContainer extends React.Component {
  constructor(props) {
    super(props);
    this.sendEmail = this.sendEmail.bind(this);
    this.dropDB = this.dropDB.bind(this);
  }

  sendEmail(e) {
    const storiesList = this.props.board.stories
      ? Object.keys(this.props.board.stories).map(storyId => ({
          ...this.props.board.stories[storyId],
          id: storyId,
        }))
      : [];
    let text = '';
    storiesList.map(story => {
      text += `Story: ${story.storyName}, Card: ${story.card}.
             `;
    });
    const scrumMasterList = this.props.board.scrumMaster
      ? Object.keys(this.props.board.scrumMaster).map(scrumMasterId => ({
          ...this.props.board.scrumMaster[scrumMasterId],
          id: scrumMasterId,
        }))
      : [];

    let mails = '';
    scrumMasterList.map(scrumMaster => {
      mails += `${scrumMaster.email}`;
    });
    const body = {
      mail: mails,
      text: text,
    };

    axios
      .post('http://localhost:8080/mail', body)
      .then(function(response) {})
      .catch(function(error) {
        console.log('err', error);
      });
  }

  dropDB() {
    this.props.firebase.remove(`${this.props.match.params.boardname}`);
  }

  render() {
    const storiesList = this.props.board.stories
      ? Object.keys(this.props.board.stories).map(storyId => ({
          ...this.props.board.stories[storyId],
          id: storyId,
        }))
      : [];

    return (
      <ResultsAll
        storiesList={storiesList}
        sendEmail={this.sendEmail}
        dropDB={this.dropDB}
      />
    );
  }
}

export default compose(
  firebaseConnect(props => [
    { path: `${props.match.params.boardname}` }, // string equivalent 'todos'
  ]),
  connect((state, props) => ({
    board: state.firebase.data[props.match.params.boardname] || {},
  })),
)(ResultsAllContainer);
