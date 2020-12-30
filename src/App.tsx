import React from 'react';
import { Route, Switch } from "react-router-dom";
import Home from "./components/Home/Home"
import RecipeShowPage from "./components/Recipes/RecipeShowPage"
import NoMatch from "./components/Error/NoMatch"
import './css/App.css';

const App: React.FC = (props) => {
  return (
    <>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path="/recipes" component={RecipeShowPage} />
        <Route component={NoMatch} />
      </Switch>
    </>
  )
}

export default App;
