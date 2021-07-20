import { createStore, applyMiddleware } from 'redux';
import countReducer from './count-reducer';
// 引入redux-thunk 用于支持异步action
import thunk from 'redux-thunk';

// applyMiddleware(thunk) ???
const store = createStore(countReducer, applyMiddleware(thunk));

export default store;