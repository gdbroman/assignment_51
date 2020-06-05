import React from 'react';
import './VehicleSettings.scss';
import Vehicle from '../../components/vehicle/Vehicle';
import Setting from '../setting/Setting';
import { Route, NavLink, } from 'react-router-dom';
import Alerts from './alerts/Alerts';
import Journal from './journal/Journal';
import TitleNav from '../title_nav/TitleNav';

const getSettingInfo = state => {
    return state.loggedIn;
}

class VehicleSettings extends React.Component {
    render() {
        return (
            <div className="vs">
                <Route exact path="/location/settings"> 
                    <TitleNav title="Settings" backlink="/location" />
                    <Vehicle info={this.props.info} additional_text={true} />
                    <p>{getSettingInfo ? "a" : "b"}</p>
                    <NavLink to='/location/settings/alerts' >
                        <Setting title="Alerts" />
                    </NavLink>
                    <NavLink to='/fences/me'>
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
                    <Alerts info={this.props.info} />
                </Route>
                <Route path="/location/settings/journal">  
                    <Journal info={this.props.info} />
                </Route>
            </div>
        );
    }
}

export default VehicleSettings;