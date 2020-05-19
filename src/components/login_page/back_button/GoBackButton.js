import React from 'react';
import './GoBackButton.scss'

class GoBackButton extends React.Component {
  render() { 
    return (
      <div class="back-container">
        <i class="material-icons back-arrow">arrow_back</i>
        <p class="back-text">Go back</p>
      </div>
    );
  }
}

export default GoBackButton