import React from 'react';
import Nav from './components/nav/Nav';
import './App.scss';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';
import LoginScreen from './components/login_page/LoginScreen';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loadingBarProgress: 10
    };
  }
 
  add = value => {
    this.setState({
      loadingBarProgress: this.state.loadingBarProgress + value
    });
  };
 
  complete = () => {
    this.setState({ loadingBarProgress: 100 });
  };
 
  onLoaderFinished = () => {
    this.setState({ loadingBarProgress: 0 });
  };

  componentDidMount() {
    this.setState({isLoading: false})
    setTimeout(function() { //Start the timer
      this.complete()
    }.bind(this), 1000)
  }

  renderRouter () {
    return (
      <Router >
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
        <Switch>
          <Route path="/welcome"><LoginScreen /></Route>
        </Switch>
      </Router>
    );
  }

  render() {
    return (
      <div className="app">
        <div className="lb">
          <LoadingBar progress={this.state.loadingBarProgress} onLoaderFinished={() => this.onLoaderFinished()} height={3} color='#fff' />
        </div>
        {this.state.isLoading ? "" : this.renderRouter()}
      </div>
    );
  }
}

export default App;