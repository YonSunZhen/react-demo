import React from 'react';
// const Clock = (p) => {
//   return (
//     <div>
//       <h1>Hello, world</h1>
//       <h2>It is {p.date.toLocaleTimeString()}.</h2>
//     </div>
//   )
// }

class Clock extends React.Component {

  props;
  state = {date: new Date()};
  timerID;

  // constructor(props) {
  //   super(props);
  // }

  // 挂载组件
  componentDidMount() {
    this.timerID = setInterval(() => {
      this.tick();
    }, 1000);
  }

  // 销毁组件
  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    })
  }

  render() {
    return (
      <div>
        <h1>Hello, world</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    )
  }
}

export default Clock;

