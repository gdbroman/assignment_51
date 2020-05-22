import React from 'react';
import './VehicleSettings.scss';
import Vehicle from '../../components/vehicle/Vehicle';
import Setting from '../setting/Setting';

class VehicleSettings extends React.Component {
    render() {
        return (
            <div className="vs">
                <div className="title">
                    <div className="icon" onClick={this.props.func}><span className="material-icons">arrow_back</span></div>
                    <h1>Settings</h1>
                </div>
                <Vehicle info={this.props.info} additional_text={true} />
                <Setting title="Alerts" />
                <Setting title="Geo-fences" />
                <Setting title="Driver's journal" />
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
            </div>
        );
    }
}

export default VehicleSettings;