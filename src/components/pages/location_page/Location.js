import React from 'react';
import './Location.scss';
import Tab from './tab/Tab';
import Map from './map/Map';

class LocationPage extends React.Component {
  componentDidMount() {
    document.title = 'Location | Possio Alarm';
  }

  render() {
    return (
      <div className="location_page">
          <Map />
          <Tab vehicles={this.props.vehicles} />
      </div>
    );
  }
}

export default LocationPage;