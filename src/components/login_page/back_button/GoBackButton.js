import React from 'react';
import { Link } from 'react-router-dom'
import './GoBackButton.scss'

class GoBackButton extends React.Component {
  render() { 
    return (
      <Link to={this.props.link} class="back-container">
        <i class="material-icons back-arrow">arrow_back</i>
        <p class="back-text">Go back</p>
      </Link>
    );
  }
}

export default GoBackButton