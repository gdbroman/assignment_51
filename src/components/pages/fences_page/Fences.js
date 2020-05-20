import React from 'react';
import './Fences.scss';

class Fences_page extends React.Component {
  componentDidMount() {
    document.title = 'Fences | Possio Alarm';
  }

  render() {
    return (
      <div className="location_page">
          <h1>Fences page</h1>
      </div>
    );
  }
}

export default Fences_page;