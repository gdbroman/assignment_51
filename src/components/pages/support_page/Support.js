import React from 'react';
import './Support.scss';

class Support_page extends React.Component {
  componentDidMount() {
    document.title = 'Support | Possio Alarm';
  }

  render() {
    return (
      <div className="location_page">
          <h1>Support page</h1>
      </div>
    );
  }
}

export default Support_page;