import { INCREMENT_TYPE, DECREMENT_TYPE } from '../constant';

const defaultState = 0;

// reducer中只进行最基础的操作 一些判断逻辑交给组件来控制
export default function countReducer(preState = defaultState, action) {
  const { type, data } = action;
  switch (type) {
    case INCREMENT_TYPE:
      return preState + data * 1;
    case DECREMENT_TYPE:
      return preState - data * 1;
    default:
      return preState;
  }
}