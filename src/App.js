import React from 'react';
import Nav from './components/nav/Nav';
import './App.scss';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { createBrowserHistory } from 'history';
import LoadingBar from 'react-top-loading-bar';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isLoading: true }
  }

  componentDidMount() {
    this.setState({isLoading: false})
    this.done();
  }

  done() {
    setTimeout(function() { //Start the timer
      this.LoadingBar.complete()
    }.bind(this), 1000)
  }

  renderRouter () {
    return (
      <Router history={createBrowserHistory()} >
        <Nav />
        <Switch>
          <Route path="/"></Route>
          <Route path="/trackers"></Route>
          <Route path="/fences"></Route>
          <Route path="/journeys"></Route>
          <Route path="/events"></Route>
          <Route path="/users"></Route>
          <Route path="/profile"></Route>
          <Route path="/support"></Route>
          <Route path="/logout"></Route>
        </Switch>
      </Router>
    );
  }

  render() {
    return (
      <div className="app">
        <div className="lb">
          <LoadingBar onRef={ref => (this.LoadingBar = ref)} height={3} color='#fff' />
        </div>
        <div className="btns">
          <button onClick={() => this.LoadingBar.continuousStart()}>
            Start Continuous Bar Loading
          </button>
          <button onClick={() => this.LoadingBar.staticStart()}>
            Start Static Bar Loading
          </button>
          <button onClick={() => this.LoadingBar.complete()}>Complete</button>
          <br />
          <button onClick={() => this.LoadingBar.add(10)}>Add 10</button>
          <button onClick={() => this.LoadingBar.add(30)}>Add 30</button>
        </div>
        {this.state.isLoading ? () => this.LoadingBar.continuousStart() : this.renderRouter()}
      </div>
    );
  }
}

export default App;