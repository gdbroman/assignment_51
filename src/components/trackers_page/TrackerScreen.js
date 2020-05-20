import React from 'react';
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
            <Route path="/trackers/signin"></Route>
            <Route path="/trackers/registration"></Route>
            <Route path="/trackers"><Tracker /></Route>
          </Switch>
        </div>
      
    );
  }
}

export default TrackerScreen