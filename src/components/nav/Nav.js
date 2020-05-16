import React from 'react';
import './Nav.scss';
import { NavLink } from 'react-router-dom';
import logo from "../../assets/img/possio_logo.png"; // relative path to image 

function Nav() {
  return (
    <header>
      <nav className="header">
        <div className="hamburger">
          <i className="material-icons">dehaze</i>
        </div>
        <a href="/"><img src={logo} className="logo"/></a>
      </nav>
      <nav className="side">
        <ul>
          <NavLink to ="/" exact={true} activeClassName='active'><li><i className="material-icons">map</i><p>Location</p></li></NavLink>
          <NavLink to ="/trackers"><li><i className="material-icons">list</i><p>Possio Trackers</p></li></NavLink>
          <NavLink to ="/fences"><li><i className="material-icons">tab_unselected</i><p>Geo-fences</p></li></NavLink>
          <NavLink to ="/journeys"><li><i className="material-icons">device_hub</i><p>Journeys</p></li></NavLink>
          <NavLink to ="/events"><li><i className="material-icons">notifications</i><p>Events</p></li></NavLink>
          <NavLink to ="/users"><li><i className="material-icons">people</i><p>Users</p></li></NavLink>
          <NavLink to ="/profile"><li><i className="material-icons">settings</i><p>Profile</p></li></NavLink>
          <NavLink to ="/support"><li><i className="material-icons">public</i><p>Support</p></li></NavLink>
          <NavLink to ="/logout"><li><i className="material-icons">exit_to_app</i><p>Log out</p></li></NavLink>
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
