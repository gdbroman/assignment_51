import React from 'react';
import Nav from './components/nav/Nav';
import './App.scss';
import { BrowserRouter as Router, Redirect, Switch, Route } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';
import Login from './components/pages/login_page/LoginScreen';
//Pages
import Location_page from './components/pages/location_page/Location';
import TrackersPage from './components/pages/trackers_page/Trackers';
import Fences_page from './components/pages/fences_page/Fences';
import Journeys_page from './components/pages/journeys_page/Journeys';
import Events_page from './components/pages/events_page/Events';
import Users_page from './components/pages/users_page/Users';
import Profile_page from './components/pages/profile_page/Profile';
import Support_page from './components/pages/support_page/Support';
import Logout_page from './components/pages/logout_page/Logout';

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
                  <Redirect exact from='/' to='/location'/>
                  <Route path="/location" component={Location_page} title="Location" />
                  <Route path="/trackers" component={TrackersPage} title="Trackers" />
                  <Route path="/fences" component={Fences_page} title="Fences" />
                  <Route path="/journeys" component={Journeys_page} title="Journeys" />
                  <Route path="/events" component={Events_page} title="Events" />
                  <Route path="/users" component={Users_page} title="Users" />
                  <Route path="/profile" component={Profile_page} title="Profile" />
                  <Route path="/support" component={Support_page} title="Support" />
                  <Route path="/logout" component={Logout_page} title="Logout" />
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