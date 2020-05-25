import React from 'react';
import Content from '../../content/Content';
import StatusButton from '../../status_button/StatusButton';
import FilterButton from '../../filter_button/FilterButton'

import {
  Route,
  Switch,
} from 'react-router-dom';

class FencesPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      is_filter_active: false
    }
  }
  toggleFilter = () => {
    this.setState(prevState => ({
      is_filter_active: !prevState.is_filter_active
    }))
  }
  render() { 
    return ( 
        <Content>
          <div className="status-button-container">
            <StatusButton status_link="/fences/me" status_title="Created by me" />
            <StatusButton status_link="/fences/others" status_title="By other users" />
          </div>
          <Switch>
            <Route path="/fences/me">  </Route>
            <Route path="/fences/others">  </Route>
          </Switch>
          <FilterButton />
        </Content>          
    );
  }
}
    
export default FencesPage;