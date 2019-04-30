import React, { Component, Fragment } from 'react';
import { ButtonLink } from '../../components'
import './home.style.css'

export class Home extends Component {
  render() {
    return (
      <Fragment>
          <div className="app-title">
            <div className="bola" />
              INSPEC APP
            </div>
          <div className="menu">
            <ButtonLink title="Jogar" to="/cadastro"/>
            <ButtonLink title="Resultados" to="/resultados" />
          </div>
      </Fragment>
    );
  }
}
