import React from 'react';

class Count extends React.Component {

  selectNumber;
  state = {count: 0};

  increment = () => {
    const num = this.selectNumber.value;
    this.setState({
      count: this.state.count + num * 1
    });
  }
  decrement = () => {
    const num = this.selectNumber.value;
    this.setState({
      count: this.state.count - num * 1
    });
  }
  incrementIfOdd = () => {
    const num = this.selectNumber.value;
    if(this.state.count % 2 !== 0) {
      this.setState({
        count: this.state.count + num * 1
      });
    }
  }
  incrementAsync = () => {
    const num = this.selectNumber.value;
    setTimeout(() => {
      this.setState({
        count: this.state.count + num * 1
      });
    }, 500);
  }

  render() {
    return (
      <div>
        <h1>当前求和为: {this.state.count}</h1>
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
