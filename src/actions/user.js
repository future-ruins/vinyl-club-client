import request from 'superagent';
const baseUrl = 'http://localhost:4000';

export const LOGIN = 'LOGIN';

export const login = (email, password) => dispatch => {
  request
    .post(`${baseUrl}/login`)
    .send({ email, password })
    .then(response => {
      //I expect the response to have a jwt
      const { jwt, userId, username } = response.body;
      dispatch({
        type: LOGIN,
        payload: { jwt, userId, username },
      });
    })
    .catch(console.error);
};

export const signup = (username, email, password) => dispatch => {
  request
    .post(`${baseUrl}/user`)
    .send({ username, email, password })
    .catch(console.error);
};

export const LOGOUT = 'LOGOUT';
export const logout = () => {
  return {
    type: LOGOUT,
  };
};
