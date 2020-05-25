import React from 'react';
import { Link } from 'react-router-dom'

import './LoginOption.scss'


class LoginOption extends React.Component {
  render() { 
    return (  
      <div className="login-option">
        <Link className="login-option-text" to={'/login/' + this.props.link}>{this.props.text}</Link>
      </div>
    );
  }
}

export default LoginOption