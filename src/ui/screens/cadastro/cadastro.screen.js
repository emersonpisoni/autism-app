import React, { Component } from 'react';
import { Redirect } from 'react-router'
import { ButtonLink, Button } from '../../components'
import { HttpClient } from '../../../services/httpclient'
import './cadastro.style.css'

export class Cadastro extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: '',
      syndrome: '',
      teaching: '',
      redirect: false
    };
  }

  handleChange = (event) => {
    const target = event.target

    this.setState({ [target.name]: target.value });
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    const userChildrenId = await HttpClient.postUser(this.state)

    userChildrenId && this.setState({ redirect: true })
  }

  render() {
    const { name, age, syndrome, teaching, redirect } = this.state

    return (
      redirect ? <Redirect to='/game' /> :
      <form className="form" onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" name='name' value={name} onChange={this.handleChange} required />
        </label>
        <label>
          Idade:
          <input type="text" pattern='^[0-9]*$' title='Digite sua idade com números' name='age' value={age} onChange={this.handleChange} required />
        </label>
        <label>
          Síndrome:
          <input type="text" name='syndrome' value={syndrome} onChange={this.handleChange} required />
        </label>
        <label>
          Escolaridade:
          <input type="text" name='teaching' value={teaching} onChange={this.handleChange} required />
        </label>
        <Button type="submit" value="Submit" title='cadastrar' />
        <ButtonLink to='/' title='voltar' />
      </form>
    );
  }
}
