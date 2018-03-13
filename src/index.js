import "es6-promise";
import React from "react";
import { render } from "react-dom";
import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import thunkMiddleware from "redux-thunk";
import clientMiddleware from "./redux/middleware/clientMiddleware";
import rootReducer from "./redux/reducers/index.js";
import App from "./App";
import "./index.scss";

const middleware = applyMiddleware(clientMiddleware);

let store = createStore(
  rootReducer,
  compose(
    middleware,
    window.__REDUX_DEVTOOLS_EXTENSION__
      ? window.__REDUX_DEVTOOLS_EXTENSION__()
      : f => f
  )
);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
