import { ADD_PERSON } from "../constant";

let defaultState = [{
  id: 1,
  name: 'haha',
  age: 666
}];

// 注意：每次执行一个 reducer 都会执行所有的reducers
export default function personReducer(preState = defaultState, action) {
  const {type, data} = action;
  switch (type) {
    case ADD_PERSON:
      // 不能使用xxx.push()
      // react-redux 内部根据数据是否不同地址判断数据是否更新 因此往数组中push数据是不会重新render界面的
      return [data, ...preState];
    default:
      return preState;
  }
}