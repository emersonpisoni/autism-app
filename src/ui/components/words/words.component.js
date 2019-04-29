import React, { Component } from 'react'
import './words.style.css'

export class Words extends Component {
    render() {
        const { isCursive } = this.props

        return (
            <div className='words' style={{fontFamily: isCursive ? `'Dancing Script', cursive` : `'Times New Roman', Times, serif `}} >
                {this.props.word}
            </div>
        )
    }
}
