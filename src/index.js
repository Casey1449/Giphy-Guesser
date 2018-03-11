import "es6-promise";
import React from "react";
import { render } from "react-dom";
import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import { browserHistory, Router } from "react-router";
import { syncHistoryWithStore } from "react-router-redux";
import thunkMiddleware from "redux-thunk";
import routes from "./routes";
import rootReducer from "./reducers/index.js";
import "./index.scss";

const middleware = applyMiddleware(thunkMiddleware);

let store = createStore(
  rootReducer,
  compose(
    middleware,
    window.__REDUX_DEVTOOLS_EXTENSION__
      ? window.__REDUX_DEVTOOLS_EXTENSION__()
      : f => f
  )
);

const history = syncHistoryWithStore(browserHistory, store);

render(
  <Provider store={store}>
    <Router history={history} routes={routes} />
  </Provider>,
  document.getElementById("root")
);
