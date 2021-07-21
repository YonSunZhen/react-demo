import { INCREMENT_TYPE, DECREMENT_TYPE } from '../constant';

export const createIncrementAction = data => ({type: INCREMENT_TYPE, data});
export const createDecrementAction = data => ({type: DECREMENT_TYPE, data});
export const createIncrementAsyncAction = (data, time): any => {
  // 这样会报错 Actions must be plain objects 
  // 当 dispatch 中的传入一个 function 时 必须使用 redux-thunk 
  // 异步 action 中一般都会调用同步 action，异步任务有结果后，分发一个同步的action去真正操作数据
  return (dispatch) => {
    setTimeout(() => {
      dispatch(createIncrementAction(data)); // 相当于 store.dispatch()
    }, time)
  }
}