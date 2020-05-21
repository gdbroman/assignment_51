import React from 'react';
import TrackersContent from './trackers/TrackersContent'
import Content from '../../content/Content'

import {
  Route,
  Switch,
} from 'react-router-dom';

import './TrackersPage.scss'


class TrackerPage extends React.Component {
  render() { 
    return ( 
        <Content>
          <Switch>
            <Route path="/trackers/active"> <TrackersContent device_status="active" /> </Route>
            <Route path="/trackers/disabled">  <TrackersContent device_status="disabled" /> </Route>
            <Route path="/trackers"><TrackersContent device_status="active" /></Route>
          </Switch>
        </Content>
      
    );
  }
}

export default TrackerPage