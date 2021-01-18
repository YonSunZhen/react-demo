import React from 'react';
import logo from './logo.svg';
import './App.css';
import Game from './game/Game';
import Clock from './clock/Clock';

function App() {
  // console.log('这里是调试1');
  const date = new Date();
  return (
    <div>
      <Game></Game>
      <Clock></Clock>
    </div>
  );
}


export default App;
