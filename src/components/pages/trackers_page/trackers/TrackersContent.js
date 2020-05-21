import React from 'react';

import './TrackersContent.scss'
import StatusButton from '../status_button/StatusButton' 


class TrackersContent extends React.Component {
  render() { 
    return (  
      <div className="status-button-container">
        <StatusButton device_status="Active" />
        <StatusButton device_status="Disabled" />
      </div>
    );
  }
}

export default TrackersContent
