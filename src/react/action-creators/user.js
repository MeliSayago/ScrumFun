import { RECEIVE_USERS } from '../constans';
import { ADD_USER } from '/constans';
import { database } from '../../Firebase';

// export const fetchUsers = () => dispatch =>
//   database.on('value', snapshot => {
//     dispatch({
//       type: RECEIVE_USERS,
//       users: snapshot.val(),
//     });
//   });

export const addUser = user => {
  return {
    type: ADD_USER,
    user,
  };
};

export const registerUser = user => dispatch => {
  // firebase.push()
  dispatch(addUser(user));
};
