import React from 'react';
import { Route, Switch } from "react-router-dom";
import Home from "./components/Home/Home"
import NoMatch from "./components/Error/NoMatch"
import './App.css';

function App() {
  return (
    <main>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route component={NoMatch} />
      </Switch>
    </main>
  )
}

export default App;
