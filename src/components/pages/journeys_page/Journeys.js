import React from 'react';
import './Journeys.scss';

class Journeys_page extends React.Component {
  componentDidMount() {
    document.title = 'Journeys | Possio Alarm';
  }

  render() {
    return (
      <div className="location_page">
          <h1>Journeys page</h1>
      </div>
    );
  }
}

export default Journeys_page;