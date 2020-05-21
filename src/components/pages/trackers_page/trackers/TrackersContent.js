import React from 'react';
import StatusButton from '../status_button/StatusButton' 
import Vehicle from '../../../../components/vehicle/Vehicle'

import './TrackersContent.scss'


class TrackersContent extends React.Component {
  getVehicles(){
    return this.props.vehicles.map((v) => {
      return (
        <div>
          <Vehicle info={v} additional_text={true}/>
        </div>
      )
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
