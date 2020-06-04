import React from 'react';

import {
   NavLink,
} from 'react-router-dom';

import './StatusButton.scss'


class StatusButton extends React.Component {
  render() { 
    return ( 
      <NavLink activeClassName="status-button-active" className="device-status-button" to={this.props.status_link}>{this.props.status_title}</NavLink>
    );
  }
}

export default StatusButton