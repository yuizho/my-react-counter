import * as React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { coutnerSlice } from "./component/Counter";
import { configureStore } from "@reduxjs/toolkit";
import { BrowserRouter } from "react-router-dom";

import App from "./App";

const store = configureStore({ reducer: coutnerSlice.reducer });

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  rootElement
);
