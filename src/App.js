import React, { Component, Fragment } from 'react';
import { Button } from './ui/components'
import './App.css';
import { Animal } from './ui/components/animais/Animal'

class App extends Component {
  render() {
    return (
      <Fragment>
        <div className="app">
          <div className="bola" />
          <div className="app-title">
            AUTISM APP
          <Animal
              name='raposa'
              width={30}
            />
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
