import React from 'react';
import SignIn from './signin/SignIn'
import Registration from './registration/Registration'
import WelcomeBack from './welcome_back/WelcomeBack'

import {
  Route,
  Switch,
} from 'react-router-dom';

import './LoginScreen.scss'


class LoginScreen extends React.Component {
  render() { 
    return ( 
        <div className="login-container">
          <Route path="/signin"><SignIn /></Route>
          <Route path="/registration"><Registration /></Route>
          <Route path="/"><WelcomeBack /></Route>
        </div>
      
    );
  }
}

export default LoginScreen