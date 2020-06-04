import React from 'react';
import TrackersContent from './trackers/TrackersContent'
import Content from '../../content/Content'
import StatusButton from '../../status_button/StatusButton'
import AddTracker from './trackers/add_tracker/AddTracker'
import {
  Route,
  Switch,
} from 'react-router-dom';
import './TrackersPage.scss'

class TrackerPage extends React.Component {

  render() { 
    return ( 
        <Content>
          <div className="status-button-container">
            <StatusButton status_link="/trackers/active" status_title="Active" />
            <StatusButton status_link="/trackers/disabled" status_title="Disabled" />
          </div>
          <Switch>
            <Route path="/trackers/active"> <TrackersContent vehicles={this.props.vehicles.active} /> </Route>
            <Route path="/trackers/disabled">  <TrackersContent  vehicles={this.props.vehicles.disabled} /> </Route>
          </Switch>
          <AddTracker />
        </Content>
      
    );
  }
}

export default TrackerPage