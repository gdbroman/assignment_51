import React from 'react';
import './Tab.scss';
import Vehicle from  '../../../vehicle/Vehicle';
import VehicleSettings from  '../../../vehicle_settings/VehicleSettings';
import Button from  '../../../button/Button';
import Setting from '../../../setting/Setting';
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
          <div className="prevnext">
            <p className="pn prev">Prev</p>
            <p className="position">1/1</p>
            <p className="pn next">Next</p>
          </div>
          <div className="vehicle-container">
            <div onClick={this.toggle}>
              <Vehicle info={this.props.vehicles.active[0]}/>
            </div>
            <div className="buttons">
              <Button text="Request Location" />
              <Button text="Share Location" />
            </div>
          </div>       
          <NavLink to='/location/settings' >
            <Setting title="Settings" />
          </NavLink>
          <NavLink to='/location/history'>
            <Setting title="Location History" />   
          </NavLink>
          <Switch>
            <Route path="/location/settings">
            <VehicleSettings info={this.props.vehicles.active[0]} func={this.hideSettings} />
            </Route>
          </Switch>
      </footer>
    );
  }
}

export default Tab_page;