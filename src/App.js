import React from 'react';
import Nav from './components/nav/Nav';
import './App.scss';
import { BrowserRouter as Router, Redirect, Switch, Route } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';
import Login from './components/pages/login_page/Login';

import LocationPage from './components/pages/location_page/Location';
import TrackersPage from './components/pages/trackers_page/TrackersPage';
import FencesPage from './components/pages/fences_page/Fences';
import JourneysPage from './components/pages/journeys_page/Journeys';
import EventsPage from './components/pages/events_page/Events';
import UsersPage from './components/pages/users_page/Users';
import ProfilePage from './components/pages/profile_page/Profile';
import SupportPage from './components/pages/support_page/Support';
import LogoutPage from './components/pages/logout_page/Logout';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loadingBarProgress: 10,
      vehicles: {
        active: [
          {name: 'Ture', date: '2017-98', clock: '231', status:"Active", share_text:"Shared", id:"S/N: 00000096969696969699", available_sms: 10, tracker_battery: 4.1, vehicle_battery: 25.53, total_distance: 477.69},
          {name: 'Clas', date: '201227-98', clock: '221', status:"Active", share_text:"Shared", id:"S/N: 1111111111111111312312", available_sms: 10, tracker_battery: 4.1, vehicle_battery: 25.53, total_distance: 477.69}
        ],
        disabled: [
          {name: 'Hans', date: '1982-98', clock: '6969', status:"Disabled", share_text:"Shared", id:"S/N: 4124234", available_sms: 10, tracker_battery: 4.1, vehicle_battery: 25.53, total_distance: 477.69},
          {name: 'Greta', date: '2027-98', clock: '420', status:"Disabled", share_text:"Shared", id:"S/N: 9865875412312", available_sms: 10, tracker_battery: 4.1, vehicle_battery: 25.53, total_distance: 477.69}
        ]
      }
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
                  <Route path="/location" title="Location"><LocationPage vehicles={this.state.vehicles} /></Route>
                  <Route path="/trackers" title="Trackers"> <TrackersPage vehicles={this.state.vehicles} /></Route>
                  <Route path="/fences" title="Fences"><FencesPage vehicles={this.state.vehicles} /></Route>
                  <Route path="/journeys" title="Journeys"><JourneysPage vehicles={this.state.vehicles} /></Route>
                  <Route path="/events" title="Events"><EventsPage vehicles={this.state.vehicles} /></Route>
                  <Route path="/users" title="Users"><UsersPage vehicles={this.state.vehicles} /></Route>
                  <Route path="/profile" title="Profile"><ProfilePage vehicles={this.state.vehicles} /></Route>
                  <Route path="/support" title="Support"><SupportPage vehicles={this.state.vehicles} /></Route>
                  <Route path="/logout" title="Logout"><LogoutPage vehicles={this.state.vehicles} /></Route>
                  <Redirect exact from='/' to='/location'/>
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