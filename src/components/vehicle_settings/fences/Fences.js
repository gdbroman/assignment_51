import React from 'react';
import './Fences.scss';
import TitleNav from '../../title_nav/TitleNav';

class Alerts extends React.Component {
    render() {
        return (
            <div>
                <TitleNav title={"Geo-fences (" + this.props.info.name + ")"} backlink="/location/settings" /> 
            </div>
        );
    }
}

export default Alerts;