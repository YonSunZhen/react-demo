import React from 'react';
import { connect } from 'react-redux';
import { createIncrementAction, createDecrementAction, createIncrementAsyncAction }  from '../../redux';

class Count extends React.Component<any, any> {

  selectNumber;

  componentDidMount() {
    // #region react-redux中做了subscribe的事
    // store.subscribe(() => {
    //   this.setState({});
    // })
    // #endregion
  }

  increment = () => {
    const num = this.selectNumber.value;
    this.props.increment(num);
  }
  decrement = () => {
    const num = this.selectNumber.value;
    this.props.decrement(num);
  }
  incrementIfOdd = () => {
    const num = this.selectNumber.value;
    if(this.props.count % 2 !== 0) {
      this.props.increment(num);
    }
  }
  incrementAsync = () => {
    const num = this.selectNumber.value;
    this.props.incrementAsync(num, 500);
  }

  render() {
    return (
      <div>
        <h2>我是Count组件</h2>
        <h4>当前求和为: {this.props.count}, 下方组件总人数为: {this.props.personNum}</h4>
        <select ref={c => this.selectNumber = c}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
        </select>&nbsp;
        <button onClick={this.increment}>+</button>&nbsp;
        <button onClick={this.decrement}>-</button>&nbsp;
        <button onClick={this.incrementIfOdd}>奇数加</button>&nbsp;
        <button onClick={this.incrementAsync}>异步加</button>
      </div>
    )
      
  }
}

// 高阶函数 生成容器组件 将store作为props传递给Count组件
export default connect<{}, {}, {}, any>(
  state => ({
    count: state.countStore,
    personNum: state.personStore.length
  }),
  // #region mapDispatchToProps的一般写法
  // dispatch => ({
  //   increment: data => dispatch(createIncrementAction(data)),
  //   decrement: data => dispatch(createDecrementAction(data)),
  //   incrementAsync: (data, time) => dispatch(createIncrementAsyncAction(data, time))
  // })
  // #endregion
  {
    increment: createIncrementAction, // react-redux中内部做了dispatch的动作
    decrement: createDecrementAction,
    incrementAsync: createIncrementAsyncAction
  }
)(Count);
