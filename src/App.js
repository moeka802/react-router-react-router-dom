import React from 'react';
import './App.css';
import { Router, Route, Switch } from "react-router"
import Home from "./components/Home"
import About from "./components/About"
import Dashboard from "./components/Dashboard"
import { createBrowserHistory } from "history"

const App = () => {
  return (
    <Router history={createBrowserHistory()}>
      <div>{document.title}</div>
      <Switch>
        <Route exact path="/"><Home /></Route>
        <Route path="/about"><About /></Route>
        <Route path="/dashboard"><Dashboard /></Route>
      </Switch>
      <a href="/">Back To Home</a>
    </Router> 
  )
}

export default App;
