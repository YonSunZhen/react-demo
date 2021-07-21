// 引入redux-thunk 用于支持异步action
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from './reducers';

// applyMiddleware(thunk) ??? composeWithDevTools 使用redux浏览器开发者工具
export default createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));
