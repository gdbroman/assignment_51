import React from 'react';
import Tracker from './tracker/Tracker'
import Content from '../content/Content'

import {
  Route,
  Switch,
} from 'react-router-dom';

import './TrackerScreen.scss'


class TrackerScreen extends React.Component {
  render() { 
    return ( 
        <Content>
          <Switch>
            <Route path="/trackers/signin"></Route>
            <Route path="/trackers/registration"></Route>
            <Route path="/trackers"><Tracker /></Route>
          </Switch>
        </Content>
      
    );
  }
}

export default TrackerScreen