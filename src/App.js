import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Home from "./pages/Home/Home.component";
import Solution from "./pages/Solution/Solution.component";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/solution" component={Solution} exact />
        <Redirect to="/" />
      </Switch>
    </div>
  );
};

export default App;
