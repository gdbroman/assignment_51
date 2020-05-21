import React from 'react';

import './TrackersContent.scss'
import StatusButton from '../status_button/StatusButton' 


class TrackersContent extends React.Component {
  render() { 
    return (  
      <div>
        <StatusButton device_status={this.props.device_status} />
      </div>
    );
  }
}

export default TrackersContent
