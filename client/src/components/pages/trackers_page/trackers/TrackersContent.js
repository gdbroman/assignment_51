import React from 'react'; 
import Vehicle from '../../../../components/vehicle/Vehicle';
import './TrackersContent.scss';

class TrackersContent extends React.Component {
  getVehicles(){
    return this.props.vehicles.map((v, i) => {
      return (
        <div>
          <Vehicle key={i} info={v} additional_text={true} />
        </div>
      )
    })
  }

  render() { 
    return (  
      <React.Fragment>
        <div className="trackers-vehicle-container" onClick={this.props.sentFunction}>
          {this.getVehicles()}
        </div>
      </React.Fragment>
    );
  }
}

export default TrackersContent
