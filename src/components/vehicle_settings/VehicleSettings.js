import React from 'react';
import './VehicleSettings.scss';
import Vehicle from '../../components/vehicle/Vehicle';

class VehicleSettings extends React.Component {
    render() {
        return (
            <div className="vs">
                <div className="title">
                    <div className="icon" onClick={this.props.func}><span className="material-icons">arrow_back</span></div>
                    <h1>Settings</h1>
                </div>
                <Vehicle info={this.props.info} additional_text={true} />
                <div className="li">
                    <p>Location History</p>
                </div>     
            </div>
        );
    }
}

export default VehicleSettings;