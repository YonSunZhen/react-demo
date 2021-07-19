
const defaultState = 0;

// reducer中只进行最基础的操作 一些判断逻辑交给组件来控制
export default function countReducer(preState = defaultState, action) {
  const { type, data } = action;
  switch (type) {
    case 'increment':
      return preState + data * 1;
    case 'decrement':
      return preState - data * 1;
    default:
      return preState;
  }
}