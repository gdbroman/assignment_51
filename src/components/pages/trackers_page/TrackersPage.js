import React from 'react';
import TrackersContent from './trackers/TrackersContent'
import Content from '../../content/Content'
import StatusButton from './status_button/StatusButton'

import {
  Route,
  Switch,
} from 'react-router-dom';

import './TrackersPage.scss'

class TrackerPage extends React.Component {
  constructor(props) {
    super()
    this.state = {
      vehicles: {
        active: [
          {name: 'Ture', date: '2017-98', ts: '231'},
          {name: 'Clas', date: '201227-98', ts: '221'}
        ],
        disabled: [
          {name: 'Hans', date: '1982-98', ts: '6969'},
          {name: 'Greta', date: '2027-98', ts: '420'}
        ]
      }
    }
  }

  render() { 
    return ( 
        <Content>
          <div className="status-button-container">
            <StatusButton status_link="active" status_title="Active" />
            <StatusButton status_link="disabled" status_title="Disabled" />
          </div>
          <Switch>
            <Route path="/trackers/active"> <TrackersContent vehicles={this.state.vehicles.active} /> </Route>
            <Route path="/trackers/disabled">  <TrackersContent  vehicles={this.state.vehicles.active} /> </Route>
          </Switch>
        </Content>
      
    );
  }
}

export default TrackerPage