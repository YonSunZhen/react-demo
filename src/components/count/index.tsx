import React from 'react';
import store  from '../../redux/store';

class Count extends React.Component {

  selectNumber;

  componentDidMount() {
    store.subscribe(() => {
      this.setState({});
    })
  }

  increment = () => {
    const num = this.selectNumber.value;
    store.dispatch({type: 'increment', data: num})
  }
  decrement = () => {
    const num = this.selectNumber.value;
    store.dispatch({type: 'decrement', data: num})
  }
  incrementIfOdd = () => {
    const num = this.selectNumber.value;
    if(store.getState() % 2 !== 0) {
      store.dispatch({type: 'increment', data: num})
    }
  }
  incrementAsync = () => {
    const num = this.selectNumber.value;
    setTimeout(() => {
      store.dispatch({type: 'increment', data: num})
    }, 500);
  }

  render() {
    return (
      <div>
        <h1>当前求和为: {store.getState()}</h1>
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

export default Count;
