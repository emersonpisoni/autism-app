import React, { Component } from 'react';
import './button.style.css'

export class Button extends Component {
  render() {
    return (
      <button className="button">
        {this.props.title}
      </button>
    );
  }
}
