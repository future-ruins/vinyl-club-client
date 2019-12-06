import {
  GET_RECORDS,
  GET_RECORDINFO,
  GET_USERCOLLECTION,
} from '../actions/records';

const initialState = [];

export default function(state = initialState, action = {}) {
  switch (action.type) {
    case GET_RECORDS:
      return action.payload;
    case GET_RECORDINFO:
      return action.payload;
    case GET_USERCOLLECTION:
      return action.payload;
    default:
      return state;
  }
}
