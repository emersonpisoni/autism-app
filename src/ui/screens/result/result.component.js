import React, { Component } from 'react'
import './result.style.css'

export class Result extends Component {

  renderResult = () => {
    const { result: { bastao, cursiva } } = this.props.result
    console.log(!!bastao.erros.lenght);

    return (
      <div className='content' >
        <div>
          <h2>BASTÃO:</h2>
          <div>
            <h3>ACERTOS: </h3>
            {!!bastao.acertos.lenght ? bastao.acertos.map(acertos => <div>{acertos}</div>) : 'nenhum'}
          </div>
          <div>
            <h3>ERROS: </h3>
            {!!bastao.erros.lenght ? bastao.erros.map(erros => <div>{erros}</div>) : 'nenhum'}
          </div>
        </div>
        <hr />
        <div>
          <h2>CURSIVA:</h2>
          <div>
            <h3>ACERTOS: </h3>
            {!!cursiva.acertos.lenght ? cursiva.acertos.map(acertos => <div>{acertos}</div>) : 'nenhum'}
          </div>
          <div>
            <h3>ERROS: </h3>
            {!!cursiva.erros.lenght ? cursiva.erros.map(erros => <div>{erros}</div>) : 'nenhum'}
          </div>
        </div>
      </div>
    )
  }

  render() {
    return (
      <div className='result' >
        <h1>RESULTADOS</h1>
        {this.renderResult()}
      </div>
    )
  }
}
