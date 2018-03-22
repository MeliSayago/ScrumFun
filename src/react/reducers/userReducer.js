import { ADD_USER } from '../constans';

const initialState = {
  users: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_USER:
      return { ...state, user: action.user };
    default:
      return state;
  }
};
