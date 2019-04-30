import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { HttpClient } from '../../../services/httpclient'
import { Button } from '../../components'
import './result.style.css'

export class Result extends Component {
  constructor() {
    super()
    this.state = {
      dificuldadeDoAluno: [],
      medidaTomada: '',
      isBastao: false,
      isCursiva: false,
      result: null,
      deveRedirecionarParaCadastro: false
    }
  }
  componentWillMount(){
    this.getResult();
  }
  getResult = async () => {
    const resultado = await HttpClient.getResult(this.props.result);
    console.log(resultado);
    this.setState({ result: resultado })
    return resultado;
  }

  renderResult = () => {
    const { result: { bastao, cursiva } } = this.props.result

    return (
      <div className='content' >
        <div>
          <h2>BASTÃO:</h2>
          <div>
            <h3>ACERTOS: </h3>
            {!!bastao.acertos.length ? bastao.acertos.map(acertos => <div>{acertos}</div>) : 'nenhum'}
          </div>
          <div>
            <h3>ERROS: </h3>
            {!!bastao.erros.length ? bastao.erros.map(erros => <div>{erros}</div>) : 'nenhum'}
          </div>
        </div>
        <hr />
        <div>
          <h2>CURSIVA:</h2>
          <div>
            <h3>ACERTOS: </h3>
            {!!cursiva.acertos.length ? cursiva.acertos.map(acertos => <div>{acertos}</div>) : 'nenhum'}
          </div>
          <div>
            <h3>ERROS: </h3>
            {!!cursiva.erros.length ? cursiva.erros.map(erros => <div>{erros}</div>) : 'nenhum'}
          </div>
        </div>
      </div>
    )
  }
  componentDidMount(){
    console.log(this.props)
  }
  toggleBastao = () => {
    this.setState({ isBastao: !this.state.isBastao })
  }

  toggleCursiva = () => {
    this.setState({ isCursiva: !this.state.isCursiva })
  }

  handleChange = (event) => {
    const target = event.target

    this.setState({ [target.name]: target.value });
  }

  renderDificuldade = () => {
    return (
      <div className='dificuldade' >
        Aonde está a dificuldade da criança?
        <label>
          <input type='checkbox' onChange={this.toggleBastao} />BASTÃO
        </label>
        <label>
          <input type='checkbox' onChange={this.toggleCursiva} />CURSIVA
        </label>
      </div>
    )
  }

  renderMedida = () => {
    return (
      <div className='medida' >
        Qual será a iniciativa para auxiliá-lo ?
        <input type='text' name='medidaTomada' value={this.state.medidaTomada} onChange={this.handleChange} />
      </div>
    )
  }

  submit = () => {
    const { medidaTomada, dificuldadeDoAluno, isBastao, isCursiva } = this.state
    const { id } = this.props.result

    isBastao && dificuldadeDoAluno.push('bastao')
    isCursiva && dificuldadeDoAluno.push('cursiva')

    HttpClient.putUserChildren({ id: this.props.result.id, medidaTomada, dificuldadeDoAluno })

    this.setState({ deveRedirecionarParaCadastro: true })
  }

  render() {
    console.log(this.state.deveRedirecionarParaCadastro);
    
    return (
      this.state.deveRedirecionarParaCadastro ? <Redirect to='/cadastro' /> :
      this.state.result ? 
      <div> tela se tiver dados</div> :
        <div className='result' >
          <h1>RESULTADOS</h1>
          {this.renderResult()}
          {this.renderDificuldade()}
          {this.renderMedida()}
          <Button title='Enviar' onClick={this.submit} />
        </div>
    )
  }
}
