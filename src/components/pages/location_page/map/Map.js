import React from 'react';
import './Map.scss';

class Map extends React.Component {
    render() {
        return (
            <div className="map" onClick={this.props.tab.down}>

            </div>
        );
    }
}

export default Map;
