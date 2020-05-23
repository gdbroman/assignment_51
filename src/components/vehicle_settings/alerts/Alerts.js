import React from 'react';
import './Alerts.scss';
import Setting from '../../setting/Setting';
import { NavLink, } from 'react-router-dom';

class Alerts extends React.Component {
    render() {
        return (
            <div className="alerts">
                <p className="label">Default Alerts</p>
                <NavLink to='/location/settings/alerts/ngt'>
                    <Setting title="Possio tracker battery low" />   
                </NavLink>
                <NavLink to='/location/settings/alerts/ngt'>
                    <Setting title="Vehicle power supply low" />   
                </NavLink>
                <NavLink to='/location/settings/alerts/ngt'>
                    <Setting title="GMS anti-jamming" />   
                </NavLink>
                <p className="label">Movement Alerts</p>
                <NavLink to='/location/settings/alerts/ngt'>
                    <Setting title="Possio tracker battery low" />   
                </NavLink>
                <NavLink to='/location/settings/alerts/ngt'>
                    <Setting title="Vehicle power supply low" />   
                </NavLink>
                <NavLink to='/location/settings/alerts/ngt'>
                    <Setting title="GMS anti-jamming" />   
                </NavLink>
                <p className="label">Advanced Alerts</p>
                <NavLink to='/location/settings/alerts/ngt'>
                    <Setting title="Possio tracker battery low" />   
                </NavLink>
                <NavLink to='/location/settings/alerts/ngt'>
                    <Setting title="Vehicle power supply low" />   
                </NavLink>
                <NavLink to='/location/settings/alerts/ngt'>
                    <Setting title="GMS anti-jamming" />   
                </NavLink>
            </div>
        );
    }
}

export default Alerts;