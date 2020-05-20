import React from 'react';

import './Content.scss'


class Content extends React.Component {
  render() { 
    return ( 
        <div className="tracker-container page-flex-container">
          {this.props.children}
        </div>
      
    );
  }
}

export default Content