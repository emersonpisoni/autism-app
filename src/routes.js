import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Home, Cadastro } from './ui/screens'

function AppRouter() {
  return (
    <Router>
      <Route path="/" exact component={Home} />
      <Route path="/cadastro" component={Cadastro} />
    </Router>
  )
}

export default AppRouter