
import { combineReducers } from 'redux';
import countReducer from './count';
import personReducer from './person';

// 合并所有的reducer
export default combineReducers({
  countStore: countReducer, 
  personStore: personReducer
});