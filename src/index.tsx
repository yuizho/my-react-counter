import * as React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { coutnerSlice } from "./component/Counter";
import { configureStore } from "@reduxjs/toolkit";

import App from "./App";

const store = configureStore({ reducer: coutnerSlice.reducer });

const rootElement = document.getElementById("root");
render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
