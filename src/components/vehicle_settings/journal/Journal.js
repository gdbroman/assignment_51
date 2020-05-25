import React from 'react';
import './Journal.scss';
import TitleNav from '../../title_nav/TitleNav';
import Journeys from '../../../components/pages/journeys_page/Journeys';

class Alerts extends React.Component {
    render() {
        return (
            <div>
                <TitleNav title={"Driver's Journal (" + this.props.info.name + ")"} backlink="/location/settings" />
                <Journeys />
            </div>
        );
    }
}

export default Alerts;