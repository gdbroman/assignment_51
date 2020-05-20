import React from 'react';
import { Link } from 'react-router-dom'

import './LoginOption.scss'


class LoginOption extends React.Component {
  render() { 
    return (  
      <React.Fragment>
        <Link className="login-option" to={'/login/' + this.props.link}>{this.props.text}</Link>
      </React.Fragment>
    );
  }
}

export default LoginOption