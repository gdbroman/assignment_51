import React from 'react';
import StatusButton from '../status_button/StatusButton' 
import Vehicle from '../../../../components/vehicle/Vehicle'

import './TrackersContent.scss'


class TrackersContent extends React.Component {
  render() { 
    return (  
      <React.Fragment>  
        <div className="status-button-container">
          <StatusButton status_link="active" status_title="Active" />
          <StatusButton status_link="disabled" status_title="Disabled" />
        </div>
        <div className="trackers-vehicle-container">
          <Vehicle />
        </div>
     </React.Fragment>
      
    );
  }
}

export default TrackersContent
