import React from 'react';
import './Alerts.scss';
import Setting from '../../setting/Setting';
import ToggleSetting from '../../setting_toggle/ToggleSetting';
import { NavLink, Route, } from 'react-router-dom';
import TitleNav from '../../title_nav/TitleNav';

class Alerts extends React.Component {
    render() {
        return (
            <div className="alerts">
                <Route exact path="/location/settings/alerts" >
                    <TitleNav title="Settings / Alerts" backlink="/location/settings" />
                    <p className="label">Default Alerts</p>
                    <NavLink to='/location/settings/alerts/possio-tracker'>
                        <Setting title="Possio tracker battery low" />   
                    </NavLink>
                    <NavLink to='/location/settings/alerts/vehicle-power'>
                        <Setting title="Vehicle power supply low" />   
                    </NavLink>
                    <NavLink to='/location/settings/alerts/gms'>
                        <Setting title="GMS anti-jamming" />   
                    </NavLink>
                    <p className="label">Movement Alerts</p>
                    <NavLink to='/location/settings/alerts/movement'>
                        <Setting title="Movement" />   
                    </NavLink>
                    <NavLink to='/location/settings/alerts/over-speed'>
                        <Setting title="Over speed" />   
                    </NavLink>
                    <NavLink to='/location/settings/alerts/harsh-brake'>
                        <Setting title="Harsh brake" />   
                    </NavLink>
                    <NavLink to='/location/settings/alerts/harsh-accelerate'>
                        <Setting title="Harsh accelerate" />   
                    </NavLink>
                    <NavLink to='/location/settings/alerts/harsh-cornering'>
                        <Setting title="Harsh cornering" />   
                    </NavLink>
                    <p className="label">Advanced Alerts</p>
                    <NavLink to='/location/settings/alerts/collision-front'>
                        <Setting title="Collision front" />   
                    </NavLink>
                    <NavLink to='/location/settings/alerts/collision-rear'>
                        <Setting title="Collision rear" />   
                    </NavLink>
                    <NavLink to='/location/settings/alerts/turn-over'>
                        <Setting title="Turn over" />   
                    </NavLink>
                </Route>
                <Route path='/location/settings/alerts/possio-tracker'>
                    <TitleNav title="Possio tracker battery low" backlink="/location/settings/alerts" />
                    <ToggleSetting title="Event alerts" /> 
                    <ToggleSetting title="SMS" /> 
                    <ToggleSetting title="Email" /> 
                    <ToggleSetting title="Notifications" /> 
                </Route>
                <Route path='/location/settings/alerts/vehicle-power'>
                    <TitleNav title="Vehicle power supply low" backlink="/location/settings/alerts" /> 
                    <ToggleSetting title="Event alerts" /> 
                    <ToggleSetting title="SMS" /> 
                    <ToggleSetting title="Email" /> 
                    <ToggleSetting title="Notifications" />  
                </Route>
                <Route path='/location/settings/alerts/gms'>
                    <TitleNav title="GMS anti-jamming" backlink="/location/settings/alerts" /> 
                    <ToggleSetting title="Event alerts" /> 
                    <ToggleSetting title="SMS" /> 
                    <ToggleSetting title="Email" /> 
                    <ToggleSetting title="Notifications" /> 
                </Route>
                <Route path='/location/settings/alerts/movement'>
                    <TitleNav title="Movement" backlink="/location/settings/alerts" /> 
                    <ToggleSetting title="Event alerts" /> 
                    <ToggleSetting title="SMS" /> 
                    <ToggleSetting title="Email" /> 
                    <ToggleSetting title="Notifications" />  
                </Route>
                <Route path='/location/settings/alerts/over-speed'>
                    <TitleNav title="Over speed" backlink="/location/settings/alerts" /> 
                    <div className="overspeed">
                        <p>Over speed settings</p>
                        <h2>81</h2>
                        <p className="mph">mph</p>
                    </div>
                    <ToggleSetting title="Event alerts" /> 
                    <ToggleSetting title="SMS" /> 
                    <ToggleSetting title="Email" /> 
                    <ToggleSetting title="Notifications" />
                </Route>
                <Route path='/location/settings/alerts/harsh-brake'>
                <TitleNav title="Harsh brake" backlink="/location/settings/alerts" />
                    <ToggleSetting title="Event alerts" /> 
                    <ToggleSetting title="SMS" /> 
                    <ToggleSetting title="Email" /> 
                    <ToggleSetting title="Notifications" />
                </Route>
                <Route path='/location/settings/alerts/harsh-accelerate'>
                    <TitleNav title="Harsh accelerate" backlink="/location/settings/alerts" />
                    <ToggleSetting title="Event alerts" /> 
                    <ToggleSetting title="SMS" /> 
                    <ToggleSetting title="Email" /> 
                    <ToggleSetting title="Notifications" />
                </Route>
                <Route path='/location/settings/alerts/harsh-cornering'>
                    <TitleNav title="Harsh cornering" backlink="/location/settings/alerts" />
                    <ToggleSetting title="Event alerts" /> 
                    <ToggleSetting title="SMS" /> 
                    <ToggleSetting title="Email" /> 
                    <ToggleSetting title="Notifications" />
                </Route>
                <Route path='/location/settings/alerts/collision-front'>
                    <TitleNav title="Collision front" backlink="/location/settings/alerts" />
                    <ToggleSetting title="Event alerts" /> 
                    <ToggleSetting title="SMS" /> 
                    <ToggleSetting title="Email" /> 
                    <ToggleSetting title="Notifications" />
                </Route>
                <Route path='/location/settings/alerts/collision-rear'>
                    <TitleNav title="Collision rear" backlink="/location/settings/alerts" />
                    <ToggleSetting title="Event alerts" /> 
                    <ToggleSetting title="SMS" /> 
                    <ToggleSetting title="Email" /> 
                    <ToggleSetting title="Notifications" />
                </Route>
                <Route path='/location/settings/alerts/turn-over'>
                    <TitleNav title="Turn over" backlink="/location/settings/alerts" />
                    <ToggleSetting title="Event alerts" /> 
                    <ToggleSetting title="SMS" /> 
                    <ToggleSetting title="Email" /> 
                    <ToggleSetting title="Notifications" />
                </Route>
            </div>
        );
    }
}

export default Alerts;