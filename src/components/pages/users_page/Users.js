import React from 'react';
import './Users.scss';

class Users_page extends React.Component {
  componentDidMount() {
    document.title = 'Users | Possio Alarm';
  }

  render() {
    return (
      <div className="location_page">
          <h1>Users page</h1>
      </div>
    );
  }
}

export default Users_page;