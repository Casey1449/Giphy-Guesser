import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import rootReducer from './reducers/index.js';
import App from './App';
import './index.css';

let store = createStore(rootReducer);

console.log(store.getState());

render(
  <App />,
  document.getElementById('root')
);

// window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
