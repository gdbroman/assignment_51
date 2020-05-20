import React from 'react';
import Nav from './components/nav/Nav';
import './App.scss';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';
import Login from './components/login_page/LoginScreen';

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
        <div className="page-container">
          <Switch>
            <Route path="/login" component={Login}></Route>
            <Route path="/" component={Nav}>
              <section className="main">
                <Nav />
                <section className="content">
                  <Route path="/location">
                    <h1>Location</h1>
                  </Route>
                  <Route path="/trackers" />
                  <Route path="/fences" />
                  <Route path="/journeys" />
                  <Route path="/events" />
                  <Route path="/users" />
                  <Route path="/profile" />
                  <Route path="/support" />
                  <Route path="/logout" />
                </section>
              </section>
            </Route>
          </Switch>
        </div>
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