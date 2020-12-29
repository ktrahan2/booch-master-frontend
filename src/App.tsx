import React from 'react';
import { Route, Link, Switch } from "react-router-dom";
import Home from "./components/Home/Home"
import './App.css';

function App() {
  return (
    <main>
      <Switch>
        <Route path='/' component={Home} />
      </Switch>
    </main>
  )
}

export default App;
