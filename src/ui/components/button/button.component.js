import React, { Component } from 'react';
import './button.style.css'

export class Button extends Component {
  render() {
    const {title, onClick, type, value} = this.props

    return (
      <button className="button" onClick={onClick} type={type} value={value} >
        {title}
      </button>
    );
  }
}
