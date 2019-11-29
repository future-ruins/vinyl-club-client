import { GET_RECORDS } from '../actions/records';

const initialState = [];

export default function(state = initialState, action = {}) {
  switch (action.type) {
    case GET_RECORDS:
      return { ...state, ...action.payload };
    default:
      return state;
  }
}
