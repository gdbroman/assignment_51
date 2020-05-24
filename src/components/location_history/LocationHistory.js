import React from 'react';
import './LocationHistory.scss';
import TitleNav from '../title_nav/TitleNav'
import Vehicle from '../vehicle/Vehicle'

class LocationHistory extends React.Component {
    render() {
        return (
            <div className="lochist">
                <TitleNav title="Settings / Location History" backlink="/location" />
                <Vehicle info={this.props.info} />
            </div>
        );
    }
}

export default LocationHistory;