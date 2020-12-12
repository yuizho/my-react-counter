import * as React from "react";
import "./styles.css";
import Counter from "./component/Counter";
import Home from "./component/Home";
import { Redirect, Route, Switch } from "react-router";

export default function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/counter" component={Counter} />
        <Route path="/" component={Home} />
        <Redirect to="/" />
      </Switch>
    </div>
  );
}
