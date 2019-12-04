import { combineReducers } from 'redux';
import user from '../reducers/user';
import recordsData from '../reducers/records';

export default combineReducers({ user, recordsData });
