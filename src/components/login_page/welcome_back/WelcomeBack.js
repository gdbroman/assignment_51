import React from 'react';
import { Link } from 'react-router-dom'
import LoginOption from '../login_option/LoginOption'
import './WelcomeBack.scss'


class Login extends React.Component {
  render() { 
    return (  
      <React.Fragment>
        <h2 className="welcome-back-title">Welcome back!</h2>
        <p>Where do you want to go?</p>
        <LoginOption text='Login' link="login"/>
        <LoginOption text='Signup' link="signup"/>
      </React.Fragment>
    );
  }
}

export default Login
