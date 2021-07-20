import React from 'react';
import './App.css';
import {Game, Clock} from './components';
import Count from './containers/count';
import store from './redux/store';
import { Provider } from 'react-redux';

function App() {
  return (
    // Provider ???
    <Provider store={store}>
      <Count></Count>
    </Provider>
  );
}


export default App;
