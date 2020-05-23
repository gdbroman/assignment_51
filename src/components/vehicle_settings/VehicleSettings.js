import React from 'react';
import './VehicleSettings.scss';
import Vehicle from '../../components/vehicle/Vehicle';
import Setting from '../setting/Setting';
import { Route, Switch, NavLink, } from 'react-router-dom';

class VehicleSettings extends React.Component {
    render() {
        return (
            <div className="vs">
                <Route exact path="/location/settings"> 
                    <div className="title">
                        <NavLink to='/location' >
                            <div className="icon"><span className="material-icons">arrow_back</span></div>
                        </NavLink>
                        <h1>Settings</h1>
                    </div>
                    <Vehicle info={this.props.info} additional_text={true} />
                    <NavLink to='/location/settings/alerts' >
                        <Setting title="Alerts" />
                    </NavLink>
                    <NavLink to='/location/settings/fences'>
                        <Setting title="Geo-fences" />   
                    </NavLink>
                    <NavLink to='/location/settings/journal'>
                        <Setting title="Driver's journal" />   
                    </NavLink>
                    <div className="additional-info">
                        <p>Additional info</p>
                        <div className="info">
                            <p>Possio Tracker Battery</p>
                            <strong>{this.props.info.tracker_battery} V</strong>
                        </div>
                        <div className="info">
                            <p>Vehicle Power Supply</p>
                            <strong>{this.props.info.vehicle_battery} V</strong>
                        </div>
                        <div className="info">
                            <p>Total Distance</p>
                            <strong>{this.props.info.total_distance} miles</strong>
                        </div>
                    </div>
                </Route>
                <Route path="/location/settings/alerts"> 
                    <div className="title">
                        <NavLink to='/location/settings' >
                            <div className="icon"><span className="material-icons">arrow_back</span></div>
                        </NavLink>
                        <h1>Settings / Alerts</h1>
                    </div>
                </Route>
                <Route path="/location/settings/fences">  
                    <div className="title">
                        <NavLink to='/location/settings' >
                            <div className="icon"><span className="material-icons">arrow_back</span></div>
                        </NavLink>
                        <h1>Settings / Geo-fences</h1>
                    </div>
                </Route>
                <Route path="/location/settings/journal">  
                    <div className="title">
                        <NavLink to='/location/settings' >
                            <div className="icon"><span className="material-icons">arrow_back</span></div>
                        </NavLink>
                        <h1>Settings / Driver's journal</h1>
                    </div>
                </Route>
            </div>
        );
    }
}

export default VehicleSettings;