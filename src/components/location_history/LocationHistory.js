import React from 'react';
import './LocationHistory.scss';
import TitleNav from '../title_nav/TitleNav'

class LocationHistory extends React.Component {
    render() {
        return (
            <TitleNav title="Settings / Location History" backlink="/location" />
        );
    }
}

export default LocationHistory;