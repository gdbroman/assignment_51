import React from 'react';
import './Profile.scss';

class ProfilePage extends React.Component {
  componentDidMount() {
    document.title = 'Profile | Possio Alarm';
  }

  render() {
    return (
      <div className="location_page">
          <h1>Profile page</h1>
      </div>
    );
  }
}

export default ProfilePage;