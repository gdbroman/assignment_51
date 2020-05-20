import React from 'react';
import Nav from './components/nav/Nav';
import './App.scss';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';
import Login from './components/login_page/LoginScreen';
<<<<<<< HEAD
//Pages
import Location_page from './components/location_page/Location';
import Trackers_page from './components/trackers_page/TrackerScreen';
import Fences_page from './components/fences_page/Fences';
import Journeys_page from './components/journeys_page/Journeys';
import Events_page from './components/events_page/Events';
import Users_page from './components/users_page/Users';
import Profile_page from './components/profile_page/Profile';
import Support_page from './components/support_page/Support';
import Logout_page from './components/logout_page/Logout';
=======
import TrackerScreen from './components/trackers_page/TrackerScreen' 

>>>>>>> 1cb15fdf9e876092b4d19fb4c7f57699951b3ba4

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
<<<<<<< HEAD
                  <Route path="/location" component={Location_page} />
                  <Route path="/trackers" component={Trackers_page} />
                  <Route path="/fences" component={Fences_page} />
                  <Route path="/journeys" component={Journeys_page} />
                  <Route path="/events" component={Events_page} />
                  <Route path="/users" component={Users_page} />
                  <Route path="/profile" component={Profile_page} />
                  <Route path="/support" component={Support_page} />
                  <Route path="/logout" component={Logout_page} />
=======
                  <Route path="/location">
                    <h1>Location</h1>
                  </Route>
                  <Route path="/trackers" component={TrackerScreen}/>
                  <Route path="/fences" />
                  <Route path="/journeys" />
                  <Route path="/events" />
                  <Route path="/users" />
                  <Route path="/profile" />
                  <Route path="/support" />
                  <Route path="/logout" />
>>>>>>> 1cb15fdf9e876092b4d19fb4c7f57699951b3ba4
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