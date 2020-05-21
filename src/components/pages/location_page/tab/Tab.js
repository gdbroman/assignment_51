import React from 'react';
import './Tab.scss';
import Vehicle from  '../../../vehicle/Vehicle';
import Button from  '../../../button/Button';

class Tab_page extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        up: false,
    }
  }

  toggle = () => {
    const currentState = this.state.up;
    this.setState({ up: !currentState });
  };

  render() {
    return (
      <footer className={this.state.up ? "tab up": "tab"}>
          <div className="prevnext">
            <p className="pn prev">Prev</p>
            <p className="position">1/1</p>
            <p className="pn next">Next</p>
          </div>
          <div className="vehicle-container">
            <div onClick={this.toggle}>
              <Vehicle />
            </div>
            <div className="buttons">
              <Button text="Request Location" />
              <Button text="Share Location" />
            </div>
          </div>
          <div className="li">
            <p>Location History</p>
          </div>
          <div className="li">
            <p>Settings</p>
          </div>
      </footer>
    );
  }
}

export default Tab_page;