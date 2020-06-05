import React from 'react';
import Content from '../../content/Content';
import StatusButton from '../../status_button/StatusButton';
import FilterButton from '../../filter/FilterButton'
import ToggleSetting from '../../setting_toggle/ToggleSetting'
import FenceList from './fences/FenceList'
import FilterSide from '../../filter/FilterSide'
import './Fences.scss'
import Button from  '../../button/Button';
import {
  Route,
  Switch,
  Link,
} from 'react-router-dom';
import TitleNav from '../../title_nav/TitleNav';
import TrackersContent from '../trackers_page/trackers/TrackersContent'
import SmallMap from './map/SmallMap'
import AddGeofence from './add/AddGeofence';

const vehicles = [{
  short_from:'Stad 1', 
  short_to: 'Stad 2',
  detailed_from: 'Jönköping 31 Järnvägen',
  detailed_to: 'Jönköping 32 Järnvägen',
  date_from: '2017-02',
  date_to: '2018-03',
  vehicle_name: 'Life Boat',
  journey_reason: 'Business',
},{
  short_from:'Stad 1', 
  short_to: 'Stad 2',
  detailed_from: 'Vaggeryd 31 Ringvägen',
  detailed_to: 'Vaggeryd 32 Ringvägen',
  date_from: '2017',
  date_to: '2018-03',
  vehicle_name: 'Fishing boat',
  journey_reason: 'Business',
},{
  short_from:'Stad 1', 
  short_to: 'Stad 2',
  detailed_from: 'Stad 1 Märket',
  detailed_to: 'Ort 11113',
  date_from: '2017',
  date_to: '2018-03',
  vehicle_name: 'Another boat',
  journey_reason: 'Business',
},{
  short_from:'Stad 1', 
  short_to: 'Stad 2',
  detailed_from: 'Stad 1 Väg 234 Sidospår 7 Genväg 23123 Linje 3',
  detailed_to: 'Stad 2 Ikea ',
  date_from: '2017',
  date_to: '2018-03',
  vehicle_name: 'Boat with a very long name to test for anomalies',
  journey_reason: 'Business',
}]

class FencesPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      is_filter_active: false,
      is_add_geofence_active: false
    }
    this.getTrackerInfo = this.getTrackerInfo.bind(this);
  }

  toggleAddGeofence = () => 
    this.setState(prevState => ({is_add_geofence_active: !prevState.is_add_geofence_active}))

  toggleFilter = () => {
    this.setState(prevState => ({
      is_filter_active: !prevState.is_filter_active
    }))
  }

  getTrackerInfo = () => {
    
  }

  render() { 
    return ( 
        <Content>
          <div className="status-button-container">
            <StatusButton status_link="/fences/me" status_title="Created by me" />
            <StatusButton status_link="/fences/others" status_title="By other users" />
          </div>
          <Switch>
            <Route path="/fences/me">
              <FenceList fences={[]}/>    
            </Route>
            <Route path="/fences/others">
              <FenceList fences={[]}/>
            </Route>
            <Route exact path="/fences/add">
              <div className="addform">
                <TitleNav title="Add geofence" backlink="/fences/me" />
                <h2>Please select a device</h2>
                <Link to="/fences/add/device">
                  <TrackersContent vehicles={this.props.vehicles.active} sentFunction={this.getTrackerInfo} />
                </Link>
              </div>
            </Route>
            <Route path="/fences/add/device" >
              <div className="addform">
                <TitleNav title="Add geofence" backlink="/fences/me" />
                <div className="c"> 
                  <input placeholder="Geo-fence name"></input>
                  <p className="label">Select Triggers</p>
                  <ToggleSetting title="Entering geo-fence" />
                  <ToggleSetting title="Leaving geo-fence" />
                  <p className="label">Valid Daily Time period</p>
                  <ToggleSetting title="24 hours" />
                  <SmallMap onClick={this.toggleAddGeofence}/>
                  <p className="label">Status</p>
                  <ToggleSetting title="Enabled" />
                  <Button text="Add" />
                </div>
              </div>
              <AddGeofence toggle={this.toggleAddGeofence} active={this.state.is_add_geofence_active}/>
            </Route>
          </Switch>
          <FilterButton toggle={this.toggleFilter}/>
          <FilterSide toggle={this.toggleFilter} toggled={this.state.is_filter_active} vehicles={vehicles.map(vehicle => vehicle.vehicle_name).filter((v, i, s) => s.indexOf(v) === i)} />
          <Link to="/fences/add"><div className="addfence"><p>+</p></div></Link>
        </Content>          
    );
  }
}
    
export default FencesPage;