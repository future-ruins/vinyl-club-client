import { USER_LOGIN, USER_LOGOUT, SET_ERROR } from '../actions/user';

const initialState = {
  jwt: null,
  userId: null,
  username: null,
};

export default function(state = initialState, action = {}) {
  switch (action.type) {
    case SET_ERROR:
      return { ...state, error: action.payload };
    case USER_LOGIN:
      return {
        ...state,
        ...action.payload,
        error: null,
      };
    case USER_LOGOUT:
      return initialState;
    default:
      return state;
  }
}
