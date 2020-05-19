import React from 'react';
import Nav from './components/nav/Nav';
import LoginScreen from './components/login_page/LoginScreen'

import './App.scss'
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

function App() {
  return (
    <div className="app">
      <Router>
        <Nav />
        <Switch>
          <Route path="/"></Route>
        </Switch>
        <Switch>
          <Route path="/welcome"><LoginScreen /></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
