import React from 'react';
import './Tab.scss';

class Tab_page extends React.Component {
  componentDidMount() {
    document.title = 'Tab | Possio Alarm';
  }

  render() {
    return (
      <footer className="tab">
          <div className="prevnext">
            <p>Prev</p>
            <p className="next">Next</p>
          </div>
      </footer>
    );
  }
}

export default Tab_page;