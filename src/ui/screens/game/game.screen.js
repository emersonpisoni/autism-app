import React, { Component } from 'react'
import { HttpClient } from '../../../services/httpclient'
import { ButtonLink, Words, Animal } from '../../components'
import { Result } from '../'
import { Animals } from '../../utils/animals'
import './game.style.css'
import { ResultDto } from '../../dto/resultDto';

export class Game extends Component {
    constructor() {
        super()
        this.state = {
            randomAnimal: Animals[Math.floor(Math.random() * Animals.length)],
            isCursive: Math.floor(Math.random() * 2),
            acertosCursiva: [],
            errosCursiva: [],
            acertosBastao: [],
            errosBastao: [],
            rodadas: 1
        }
    }
    getRandomAnimalWword = () => {
        const randomAnimal = Animals[Math.floor(Math.random() * Animals.length)]
        const isCursive = Math.floor(Math.random() * 2)

        this.setState({ randomAnimal, isCursive, rodadas: this.state.rodadas + 1 })
    }

    verificaClique = (clickedAnimal) => {
        const { randomAnimal, isCursive, acertosBastao, acertosCursiva, errosBastao, errosCursiva } = this.state

        if (randomAnimal === clickedAnimal) {
            isCursive ? acertosCursiva.push(randomAnimal) : acertosBastao.push(randomAnimal)
        } else {
            isCursive ? errosCursiva.push(randomAnimal) : errosBastao.push(randomAnimal)
        }

        this.getRandomAnimalWword()
    }

    submitData = () => {
        const result = new ResultDto({ ...this.state, userChildrenId: this.props.location.state.id })
        console.log(this.props.location.state.id);
        HttpClient.putUserChildren({ id: this.props.location.state.id, bastaoErros: result.result.bastao.erros.length, result })

        return <Result result={result} />
    }

    render() {
        const { randomAnimal, isCursive, rodadas } = this.state

        return (
            rodadas > 5 ? this.submitData() :
                <div className='game'>
                    <Words word={randomAnimal} isCursive={isCursive} />
                    <div className='animal'>
                        <Animal onClick={this.verificaClique} name='alce' width={100} />
                        <Animal onClick={this.verificaClique} name='ourico' width={100} />
                        <Animal onClick={this.verificaClique} name='vaca' width={100} />
                        <Animal onClick={this.verificaClique} name='castor' width={100} />
                        <Animal onClick={this.verificaClique} name='guaxinim' width={100} />
                        <Animal onClick={this.verificaClique} name='urso' width={100} />
                        <Animal onClick={this.verificaClique} name='raposa' width={100} />
                    </div>
                    <ButtonLink title={rodadas} to='/cadastro' />
                </div>
        )
    }
}
