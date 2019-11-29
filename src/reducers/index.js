import { combineReducers } from 'redux';
import user from '../reducers/user';
import records from '../reducers/records';

export default combineReducers({ user, records });
