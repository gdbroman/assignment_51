import React from 'react';
import './Location.scss';
import Tab from './tab/Tab';
import Map from './map/Map';

class LocationPage extends React.Component {
  componentDidMount() {
    document.title = 'Location | Possio Alarm';
  }

  render() {
    const tab = <Tab vehicles={this.props.vehicles} />;
    return (
      <div className="location_page">
          <Map tab={tab} />
          {tab}
      </div>
    );
  }
}

export default LocationPage;