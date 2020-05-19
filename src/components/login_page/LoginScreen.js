import React from 'react';
import Login from './login/Login'
import Signup from './signup/Signup'
import WelcomeBack from './welcome_back/WelcomeBack'

import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

import './LoginScreen.scss'


class LoginScreen extends React.Component {
  render() { 
    return ( 
        <div className="login-container">
          <Switch>
            <Route path="/welcome"><WelcomeBack /></Route>
            <Route path="/welcome/signup"><Signup /></Route>
            <Route path="/welcome/login"><Login /></Route>
          </Switch>
        </div>
      
    );
  }
}

export default LoginScreen