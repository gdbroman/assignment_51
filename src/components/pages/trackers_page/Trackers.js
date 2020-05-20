import React from 'react';
import TrackersContent from './active/TrackersContent'
import Content from '../../content/Content'

import {
  Route,
  Switch,
} from 'react-router-dom';

import './Trackers.scss'


class TrackerPage extends React.Component {
  render() { 
    return ( 
        <Content>
          <Switch>
            <Route path="/trackers/signin"></Route>
            <Route path="/trackers/registration"></Route>
            <Route path="/trackers"><TrackersContent /></Route>
          </Switch>
        </Content>
      
    );
  }
}

export default TrackerPage