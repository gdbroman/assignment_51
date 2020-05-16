import React from 'react';
import Nav from './components/nav/Nav';
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
      </Router>
    </div>
  );
}

export default App;
