import React from 'react';
import Side from './Side/Side';
import './Nav.scss';
import logo from "../../assets/img/possio_logo.png"; // relative path to image 

class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.sidemenuElement = React.createRef();
  }

  toggle = () => {
    this.sidemenuElement.current.slide();
  };

  render() {
    return (
      <header>
        <nav className="header">
          <div className="hamburger" onClick={this.toggle} >
            <i className="material-icons">dehaze</i>
          </div>
          <a href="/"><img src={logo} alt="Possio logo" className="logo"/></a>
        </nav>
        <Side ref={this.sidemenuElement} />
      </header>
    );
  }
}

export default Nav;
