import React from 'react'
import { Provider } from 'react-redux';
import logo from './logo.svg';
import './App.css';
import store from './store/index.js';
import Todos from './components/Todos';

const App = () => {
  return (
    <Provider store={store}>
      <div className="App" >
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Learning redux</h1>
        <Todos/>
      </div >
    </Provider>
  );
}

export default App;
