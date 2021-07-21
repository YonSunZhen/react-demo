import { ADD_PERSON } from "../constant";

const defaultState = [{
  id: 1,
  name: 'haha',
  age: 666
}];

export default function personReducer(preState = defaultState, action) {
  const {type, data} = action;
  switch (type) {
    case ADD_PERSON:
      return [data, ...preState];
    default:
      return defaultState;
  }
}