import React, { Component } from 'react';
import AppRouter from './routes'
import './App.css';
import { Teste } from './http/dtos/httpclient';

onclick = () => {
  Teste();
}

class App extends Component {
  render() {
    return (
      <AppRouter />
    );
  }
}

export default App;
