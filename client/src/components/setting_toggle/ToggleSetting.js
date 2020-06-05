import React from 'react';
import './ToggleSetting.scss';

class ToggleSetting extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      on: false,
    }
  }

  toggle = () => {
    this.setState(prevState => ({
      on: !prevState.on,
    }));
  }

  render() {
    return (
        <div className={this.state.on ? "li toggle toggled" : "li toggle"} onClick={this.props.customClickEvent}>
          <div className="container">
            <p>{this.props.title}</p>
            <span className="material-icons" onClick={this.toggle}>
            {this.state.on ? "toggle_on" : "toggle_off"}
            </span>
          </div>
        </div>
    );
  }
}

export default ToggleSetting;