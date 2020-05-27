import React from 'react';
import { Link } from 'react-router-dom'

import './LoginOption.scss'


class LoginOption extends React.Component {
  render() { 
    return (  
      <Link className="login-option" to={'/login/' + this.props.link}>
        <p className="login-option-text"> {this.props.text}</p>
      </Link>
    );
  }
}

export default LoginOption