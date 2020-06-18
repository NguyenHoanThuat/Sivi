import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./App.css";
import Home from './containers/Home/index'
import Cart from './containers/Cart/index'
import Header from './layouts/Header/index'

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/home' component={Home} />
        <Route exact path='/cart' component={Cart} />
      </Switch>
    </Router>
  );
}

export default App;
