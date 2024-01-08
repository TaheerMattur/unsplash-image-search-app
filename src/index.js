import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
//
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import rootReducers from "./services/reducers/index";

const thunkMiddleware = require("redux-thunk").default;

const store = createStore(rootReducers, applyMiddleware(thunkMiddleware));

// console.log("storeData", store)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

reportWebVitals();
