import request from 'superagent';
const baseURL = 'http://localhost:4000';

// FETCH RECORDS
export const GET_RECORDS = 'GET_RECORDS';

export const fetchRecords = page => {
  return dispatch => {
    request(`${baseURL}/records?page=${page}`)
      .then(response => {
        console.log('response.body getRecords', response.body);
        const recordsData = response.body;
        dispatch({
          type: GET_RECORDS,
          payload: recordsData,
        });
      })
      .catch(console.error);
  };
};

// FETCH A SINGLE RECORD
export const GET_RECORDINFO = 'GET_RECORDINFO';

export const fetchOneRecord = id => {
  return dispatch => {
    request(`${baseURL}/record/${id}`)
      .then(response => {
        console.log('response.body getOneRecord', response.body.user);
        const recordInfo = response.body;
        const postedBY = response.body.user;
        dispatch({
          type: GET_RECORDINFO,
          payload: { ...recordInfo, ...postedBY },
        });
      })
      .catch(console.error);
  };
};
