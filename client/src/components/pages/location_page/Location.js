import React from 'react';
import './Location.scss';
import Tab from './tab/Tab';
import MapContainer from './map/Map';

class LocationPage extends React.Component {
  componentDidMount() {
    document.title = 'Location | Possio Alarm';
  }

  render() {
    return (
      <div className="location_page">
          <MapContainer />
          <Tab vehicles={this.props.vehicles} />
      </div>
    );
  }
}

export default LocationPage;