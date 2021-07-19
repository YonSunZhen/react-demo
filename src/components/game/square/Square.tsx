import React from 'react';
import { textChangeRangeIsUnchanged } from 'typescript';
import './Square.css';

// class Square extends React.Component {

//   props;
//   state;

//   constructor(props) {
//     super(props); // 有什么作用
//   }

//   render() {
//     return (
//       <button className="square" onClick={() => this.props.onClick()}>
//         {this.props.value}
//       </button>
//     )
//   }
// }

function Square(props) {
  return (
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
  )
}

export default Square;