import request from 'superagent';
const baseURL = 'http://localhost:4000';

// FETCH RECORDS
export const GET_RECORDS = 'GET_RECORDS';

export const fetchRecords = page => {
  return dispatch => {
    request(`${baseURL}/records?page=${page}`)
      .then(response => {
        console.log('response.body getRecords', response.body);
        const records = response.body.rows;
        dispatch({
          type: GET_RECORDS,
          payload: records,
        });
      })
      .catch(console.error);
  };
};
