import React from 'react';
import { connect } from 'react-redux';
import { fetchUsers } from './redux/actions/user';
import { bindActionCreators } from 'redux';

class App extends React.Component {

  componentWillMount() {
    this.props.fetchUsers()
  }

  render() {
    return (
      <div>
        <h1>{this.props.users}</h1>
      </div>
    );
  }
}

const mapStateToProps = state => ({
	users: state.userReducer.users,
  })

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchUsers
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App);
