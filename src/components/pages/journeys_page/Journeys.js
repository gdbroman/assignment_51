import React from 'react';
import Journey from './journey/Journey'
import './Journeys.scss';
import JourneysFilterButton from '../../filter_button/FilterButton';
import JourneysFilter from './journeys_filter/JourneysFilter'
import Content from '../../content/Content'

const journeys = [{
  short_from:'Stad 1', 
  short_to: 'Stad 2',
  detailed_from: 'Stad 1 Märket',
  detailed_to: 'Stad 2 klippan',
  date_from: '2017',
  date_to: '2018-03',
  vehicle_name: 'Burke the boat',
  journey_reason: 'Business',
},{
  short_from:'Stad 1', 
  short_to: 'Stad 2',
  detailed_from: 'Stad 1 Märket',
  detailed_to: 'Stad 2 klippan',
  date_from: '2017',
  date_to: '2018-03',
  vehicle_name: 'Båt Tor',
  journey_reason: 'Business',
},{
  short_from:'Stad 1', 
  short_to: 'Stad 2',
  detailed_from: 'Stad 1 Märket',
  detailed_to: 'Stad 2 klippan',
  date_from: '2017',
  date_to: '2018-03',
  vehicle_name: 'Frej',
  journey_reason: 'Business',
},{
  short_from:'Stad 1', 
  short_to: 'Stad 2',
  detailed_from: 'Stad 1 Märket',
  detailed_to: 'Stad 2 klippan',
  date_from: '2017',
  date_to: '2018-03',
  vehicle_name: 'Båte with a very long name to test for anomalies',
  journey_reason: 'Business',
}]

class JourneysPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display_filters: false
    }
  }

  toggleFilter = () => {
    this.setState((prevState) => ({
      display_filters: !prevState.display_filters
    }))
  }

  componentDidMount() {
    document.title = 'Journeys | Possio Alarm';
  }

  render() {
    return (
      <Content>
          {journeys.map(journey => <Journey journey={journey} />)}
          <JourneysFilterButton toggle={this.toggleFilter}/>
          <JourneysFilter toggled={this.state.display_filters} toggleFilter={this.toggleFilter} vehicles={journeys.map(journey => journey.vehicle_name).filter((v, i, s) => s.indexOf(v) === i)}/>
      </Content>
    );
  }
}

export default JourneysPage;