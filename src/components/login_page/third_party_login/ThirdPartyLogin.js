import React from 'react';
import { FacebookLoginButton, GoogleLoginButton} from "react-social-login-buttons";
import './ThirdPartyLogin.scss'


class ThirdPartyLogin extends React.Component {
  render() {
      return (
        <div className="third-party-container">
          <p className="third-party-text">or sign in via</p>  
          <div className="third-party-button-container">
            <FacebookLoginButton className="third-party-login-button" onClick={() => alert("Hello")} />
            <GoogleLoginButton className="third-party-login-button" onClick={() => alert("Hello")} />
          </div>
        </div>
      )
  }
}

export default ThirdPartyLogin
