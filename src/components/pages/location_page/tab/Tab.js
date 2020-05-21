import React from 'react';
import './Tab.scss';
import Vehicle from  '../../../vehicle/Vehicle';
import VehicleSettings from  '../../../vehicle_settings/VehicleSettings';
import Button from  '../../../button/Button';

class Tab_page extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        up: false,
        show_settings: false,
    }
  }

  toggle = () => {
    const currentState = this.state.up;
    this.setState({ up: !currentState });
  };

  down = () => {
    this.setState({ up: false });
  }
  
  showSettings = () => {
    this.setState({ show_settings: true});
  }

  hideSettings = () => {
    this.setState({ show_settings: false});
  }

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
              <Vehicle info={this.props.vehicles.active[0]}/>
            </div>
            <div className="buttons">
              <Button text="Request Location" />
              <Button text="Share Location" />
            </div>
          </div>
          <div className="li">
            <p>Location History</p>
          </div>          
          <div className="li" onClick={this.showSettings}>
            <p>Settings</p>
          </div>
          <section className={this.state.show_settings ? "settings show": "settings"}>
            <VehicleSettings func={this.hideSettings} />
          </section>
      </footer>
    );
  }
}

export default Tab_page;