import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './button.style.css'

export class ButtonLink extends Component {
  render() {
    const {to, title, onClick} = this.props

    return (
      <Link className="button" to={to} onClick={onClick} >
        {title}
      </Link>
    );
  }
}
