import React from 'react';
import './Tab.scss';
import Vehicle from  '../../../vehicle/Vehicle';

class Tab_page extends React.Component {
  componentDidMount() {
    document.title = 'Tab | Possio Alarm';
  }

  render() {
    return (
      <footer className="tab">
          <div className="prevnext">
            <p className="pn prev">Prev</p>
            <p className="position">1/1</p>
            <p className="pn next">Next</p>
          </div>
          <div className="vehicle-container">
            <Vehicle />
          </div>
      </footer>
    );
  }
}

export default Tab_page;