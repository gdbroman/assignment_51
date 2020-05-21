import React from 'react';
import './VehicleSettings.scss';

class VehicleSettings extends React.Component {
    render() {
        return (
            <div className="vs">
                <div className="title">
                    <div className="icon" onClick={this.props.func}><span className="material-icons">arrow_back</span></div>
                    <h1>Settings</h1>
                </div>
            </div>
        );
    }
}

export default VehicleSettings;