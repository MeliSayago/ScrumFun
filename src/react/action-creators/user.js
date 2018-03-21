import { RECEIVE_USERS } from '../constans';
import { database } from '../../Firebase';

export const fetchUsers = () => dispatch =>
  database.on('value', snapshot => {
    dispatch({
      type: RECEIVE_USERS,
      users: snapshot.val(),
    });
  });

//exports const loginUser=()=> dispatch
