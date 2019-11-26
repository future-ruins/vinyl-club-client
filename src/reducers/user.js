const initialState = {
  jwt: null,
  userId: null,
  username: null,
};
export default function(state = initialState, action = {}) {
  switch (action.type) {
    case 'LOGIN':
      return { ...state, ...action.payload };
    case 'LOGOUT':
      return initialState;
    default:
      return state;
  }
}
