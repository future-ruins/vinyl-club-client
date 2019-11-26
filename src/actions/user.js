import request from 'superagent';
const baseURL = 'http://localhost:4000';

export const SET_ERROR = 'SET_ERROR';

// USER LOGIN
export const USER_LOGIN = 'USER_LOGIN';
export const login = (email, password) => {
  return dispatch => {
    request
      .post(`${baseURL}/login`)
      .send({ email, password })
      .then(response => {
        const { jwt, userId, username } = response.body;
        dispatch({
          type: USER_LOGIN,
          payload: { jwt, userId, username },
        });
      })
      .catch(error => {
        console.error(error);
        dispatch({
          type: SET_ERROR,
          payload: error.response.body.message,
        });
      });
  };
};

// USER SIGNUP
export const USER_SIGNUP = 'USER_SIGNUP';
export const signup = data => {
  return dispatch => {
    request
      .post(`${baseURL}/user`)
      .send(data)
      .then(() => {
        // If user is created successfully, login user
        return request
          .post(`${baseURL}/login`)
          .send({ email: data.email, password: data.password });
      })
      .then(response => {
        dispatch({
          type: USER_LOGIN,
          payload: response.body.jwt,
        });
      })
      .catch(error => {
        console.error(error);
        dispatch({
          type: SET_ERROR,
          payload: error.response.body.message,
        });
      });
  };
};

// USER LOGOUT
export const USER_LOGOUT = 'USER_LOGOUT';
export const logout = () => {
  return {
    type: USER_LOGOUT,
  };
};
