import React from 'react';
import InputField from '../input_field/InputField';
import ThirdPartyLogin from '../third_party_login/ThirdPartyLogin'
import GoBackButton from '../back_button/GoBackButton'
import './Signup.scss'


class Signup extends React.Component {
  render() { 
    return (  
      <form className="login-form">
        <InputField input_type="Name"/>
        <InputField input_type="Username"/>
        <InputField input_type="Password"/>
        <button className="login-button">SIGN UP</button>
        <ThirdPartyLogin />
        <GoBackButton />
      </form>
    );
  }
}

export default Signup
