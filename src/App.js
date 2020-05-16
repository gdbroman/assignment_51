import React from 'react';
import Nav from './components/nav/Nav';
import Login from './components/login_page/Login';
import './App.scss'

function App() {
  return (
    <div className="app">
      <Nav />
      <div className="page-container">
        <Login />
      </div>
    </div>
  );
}

export default App;
