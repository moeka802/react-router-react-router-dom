import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom"
import Home from "./components/Home"
import About from "./components/About"
import Dashboard from "./components/Dashboard"

function App() {
  return (
    <Router>
      <div>{document.title}</div>
      <Switch>
        <Route exact path="/"><Home /></Route>
        <Route path="/about"><About /></Route>
        <Route path="/dashboard"><Dashboard /></Route>
      </Switch>
      <Link to="/">Back To Home</Link>
    </Router>
  );
}

export default App;
