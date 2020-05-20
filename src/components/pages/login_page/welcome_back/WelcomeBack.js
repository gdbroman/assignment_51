import React from 'react';
import LoginOption from '../login_option/LoginOption'
import './WelcomeBack.scss'

class Login extends React.Component {
  componentDidMount() {
    document.title = 'Welcome | Possio Alarm';
  }

  render() { 
    return (  
      <React.Fragment>
        <h2 className="welcome-back-title">Welcome back!</h2>
        <p>Where do you want to go?</p>
        <div className="login-option-container">
          <LoginOption text='Sign in' link="signin"/>
          <LoginOption text='Registration' link="registration"/>
        </div>
      </React.Fragment>
    );
  }
}

export default Login
