import React from 'react';
import './Setting.scss';

class Setting extends React.Component {
  render() {
    return (
        <div className="li" onClick={this.props.customClickEvent}>
            <p>{this.props.title}</p>
            <span class="material-icons">
            keyboard_arrow_right
            </span>
        </div>
    );
  }
}

export default Setting;