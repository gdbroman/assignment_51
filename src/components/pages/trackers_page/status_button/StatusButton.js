import React from 'react';

import {
   NavLink,
} from 'react-router-dom';

import './StatusButton.scss'


class StatusButton extends React.Component {
  render() { 
    return ( 
      <NavLink activeClassName="status-button-active" className="device-status-button" to={"/trackers/" + this.props.device_status}>{this.props.device_status}</NavLink>
    );
  }
}

export default StatusButton