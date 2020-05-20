import React from 'react';
import SignIn from './signin/SignIn'
import Registration from './registration/Registration'
import Tracker from './tracker/Tracker'

import {
  Route,
  Switch,
} from 'react-router-dom';

import './TrackerScreen.scss'


class TrackerScreen extends React.Component {
  render() { 
    return ( 
        <div className="tracker-container">
          <Switch>
            <Route path="/trackers/signin"><SignIn /></Route>
            <Route path="/trackers/registration"><Registration /></Route>
            <Route path="/trackers"><Tracker /></Route>
          </Switch>
        </div>
      
    );
  }
}

export default TrackerScreen