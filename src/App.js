import React, { Component, Fragment } from 'react';
import { Button } from './ui/components'
import logo from './logo.svg';
import './App.css';
import { Teste } from './http/dtos/httpclient';

onclick = () => {
  Teste();
}

class App extends Component {
  render() {
    return (
      <Fragment>
        <div className="app">
          <div className="bola" />
          <div className="app-title">
            AUTISM APP
        </div>
          <div className="menu">
            <Button title="Jogar"></Button>
            <Button title="Resultados"></Button>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default App;
