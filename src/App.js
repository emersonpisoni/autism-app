import React, { Component, Fragment } from 'react';
import { Button } from './ui/components'
import './App.css';
import { Animal } from './ui/components/animais/animal.component'

class App extends Component {
  render() {
    return (
      <Fragment>
        <div className="app">
          {/* <div className="bola" /> */}
          <div className="app-title">
            AUTISM APP
            <div className="animalzinho">
              <Animal
                name='ourico'
                width={200}
              />
            </div>

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
