import React, { Component, Fragment } from 'react';
import { Link } from "react-router-dom";
import { Button } from '../../components'

export class Home extends Component {
  render() {
    return (
      <Fragment>
        <div className="app">
          <div className="bola" />
          <div className="app-title">
            AUTISM APP
        </div>
          <div className="menu">
            <Link to="/cadastro">ir para about...</Link>
            <Button title="Jogar"></Button>
            <Button title="Resultados"></Button>
          </div>
        </div>

      </Fragment>
    );
  }
}
