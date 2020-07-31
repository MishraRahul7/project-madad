import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import reduxThunk from "redux-thunk";
import history from "./history";
import { Router } from "react-router-dom";
import { createStore, applyMiddleware } from "redux";

import Reducers from "./reducers";
import App from "./component/App";

const store = createStore(Reducers, applyMiddleware(reduxThunk));
ReactDOM.render(
  <Router history={history}>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>,
  document.querySelector("#root")
);
