import React from 'react';
import './Events.scss';

class Events_page extends React.Component {
  componentDidMount() {
    document.title = 'Events | Possio Alarm';
  }

  render() {
    return (
      <div className="location_page">
          <h1>Events page</h1>
      </div>
    );
  }
}

export default Events_page;