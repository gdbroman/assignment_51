import React from 'react';

import {
   Link,
} from 'react-router-dom';

import './StatusButton.scss'


class StatusButton extends React.Component {
  render() { 
    return ( 
    <Link className="device-status-button" to={"/trackers/" + this.props.device_status}>{this.props.device_status}</Link>
    );
  }
}

export default StatusButton