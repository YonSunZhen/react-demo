// 引入redux-thunk 用于支持异步action
import thunk from 'redux-thunk';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import countReducer from './reducers/count';
import personReducer from './reducers/person';

// 合并所有的reducer
const allReducer = combineReducers({
  countStore: countReducer, 
  personStore: personReducer
})
// applyMiddleware(thunk) ???
const store = createStore(allReducer, applyMiddleware(thunk));


export default store;