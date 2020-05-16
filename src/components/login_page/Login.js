import React from 'react';
import InputField from './input_field/InputField';
import './Login.scss'


class Login extends React.Component {

  render() { 
    return (
      <div className="login-container">
        <InputField />
      </div>
    );
  }
}

export default Login