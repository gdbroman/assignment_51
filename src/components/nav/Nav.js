import React from 'react';
import './Nav.scss';

function Nav() {
  return (
    <nav className="header">
      <ul>
        <li>Location</li>
        <li>Possio Trackers</li>
        <li>Geo-fences</li>
        <li>Journeys</li>
        <li>Events</li>
        <li>Users</li>
        <li>Profile</li>
        <li>Support</li>
        <li>Log out</li>
      </ul>
    </nav>
  );
}

export default Nav;
