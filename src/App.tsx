import React from 'react';
import { Route, Switch } from "react-router-dom";
import Home from "./components/Home/Home"
import NoMatch from "./components/Error/NoMatch"
import './css/App.css';

function App() {
  return (
    <>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route component={NoMatch} />
      </Switch>
    </>
  )
}

export default App;
