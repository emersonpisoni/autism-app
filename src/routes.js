import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Home, Cadastro, Game, Result } from './ui/screens'

function AppRouter() {
  return (
    <div className="app">
      <Router>
        <Route path="/" exact component={Home} />
        <Route path="/cadastro" component={Cadastro} />
        <Route path="/game" component={Game} />
        <Route path="/result" component={Result} />
      </Router>
    </div>
  )
}

export default AppRouter