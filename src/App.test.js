import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import "es6-promise";

import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import clientMiddleware from "./redux/middleware/clientMiddleware";
import rootReducer from "./redux/reducers/index.js";
import "./index.scss";

const middleware = applyMiddleware(clientMiddleware());

let store = createStore(
  rootReducer,
  compose(
    middleware,
    window.__REDUX_DEVTOOLS_EXTENSION__
      ? window.__REDUX_DEVTOOLS_EXTENSION__()
      : f => f
  )
);

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    div
  );
});
