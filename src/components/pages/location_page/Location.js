import React from 'react';
import './Location.scss';
import Tab from './tab/Tab';
import Map from './map/Map';

class Location_page extends React.Component {
  componentDidMount() {
    document.title = 'Location | Possio Alarm';
  }

  render() {
    return (
      <div className="location_page">
          <Map />
          <Tab />
      </div>
    );
  }
}

export default Location_page;