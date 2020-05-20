import React from 'react';
import InputField from '../input_field/InputField';
import ThirdPartyLogin from '../third_party_login/ThirdPartyLogin'
import GoBackButton from '../back_button/GoBackButton'
import './SignIn.scss'


class Login extends React.Component {
  render() { 
    return (  
      <form className="login-form">
        <InputField input_type="Username"/>
        <InputField input_type="Password"/>
        <button className="login-button">SIGN IN</button>
        <p className="forgot-password-text">Forgot password?</p>
        <ThirdPartyLogin />
        <GoBackButton link="/login"/>
      </form>
    );
  }
}

export default Login
