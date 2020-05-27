import React from 'react';
import './Tab.scss';
import Vehicle from  '../../../vehicle/Vehicle';
import VehicleSettings from  '../../../vehicle_settings/VehicleSettings';
import LocationHistory from  '../../../location_history/LocationHistory';
import Button from  '../../../button/Button';
import Setting from '../../../setting/Setting';
import TitleNav from '../../../title_nav/TitleNav';
import { Route, Switch, NavLink, } from 'react-router-dom';

class Tab_page extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        up: false,
    }
  }

  toggle = () => {
    const currentState = this.state.up;
    this.setState({ up: !currentState });
  };

  down = () => {
    this.setState({ up: false });
  }

  render() {
    return (
      <footer className={this.state.up ? "tab up": "tab"}>
        <div className="m">
          <Switch>
            <Route exact path="/location">
              <div className="prevnext">
                <p className="pn prev">Prev</p>
                <p className="position">1/1</p>
                <p className="pn next">Next</p>
              </div>
              <div className="scroll">
              <div className="vehicle-container">
                <div onClick={this.toggle}>
                  <Vehicle info={this.props.vehicles.active[0]} arrow={true} up={this.state.up ? true : false} />
                </div>
                <div className="buttons">
                  <Button text="Request Location" />
                  <Button text="Share Location" />
                </div>
              </div>    
              <NavLink to='/location/history'>
                <Setting title="Location History" />   
              </NavLink>   
              <NavLink to='/location/settings' >
                <Setting title="Settings" />
              </NavLink>
              </div>
            </Route>
            <Route path="/location/history">
              <TitleNav title="Location History" backlink="/location" />
              <LocationHistory info={this.props.vehicles.active[0]} />
            </Route>
            <Route path="/location/settings">
              <VehicleSettings info={this.props.vehicles.active[0]} />
            </Route>
          </Switch>
        </div>
      </footer>
    );
  }
}

export default Tab_page;