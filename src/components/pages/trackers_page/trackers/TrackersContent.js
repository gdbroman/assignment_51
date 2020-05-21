import React from 'react';
import StatusButton from '../status_button/StatusButton' 
import Vehicle from '../../../../components/vehicle/Vehicle'

import './TrackersContent.scss'


class TrackersContent extends React.Component {
  getVehicles(){
    return this.props.state.vehicles.map((v) => {
      return <Vehicle metadata={v} />
    })
  }
  render() { 
    return (  
      <React.Fragment>  

        <div className="trackers-vehicle-container">
          {this.getVehicles()}
        </div>
     </React.Fragment>
      
    );
  }
}

export default TrackersContent
