import React from "react";
import { render } from "react-dom";
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import App from "./App";
import store from "./_redux/store"

render(
  <Provider store={store}>
    <BrowserRouter >
      <App />
    </BrowserRouter>
  </Provider>
  , document.querySelector("#app"));
