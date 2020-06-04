import React from 'react';
import Journey from './journey/Journey'
import './Journeys.scss';
import FilterButton from '../../filter/FilterButton';
import FilterSide from '../../filter/FilterSide'
import Content from '../../content/Content'

const journeys = [{
  short_from:'Stad 1', 
  short_to: 'Stad 2',
  detailed_from: 'Jönköping 31 Järnvägen',
  detailed_to: 'Jönköping 32 Järnvägen',
  date_from: '2017-02',
  date_to: '2018-03',
  vehicle_name: 'Life Boat',
  journey_reason: 'Business',
},{
  short_from:'Stad 1', 
  short_to: 'Stad 2',
  detailed_from: 'Vaggeryd 31 Ringvägen',
  detailed_to: 'Vaggeryd 32 Ringvägen',
  date_from: '2017',
  date_to: '2018-03',
  vehicle_name: 'Fishing boat',
  journey_reason: 'Business',
},{
  short_from:'Stad 1', 
  short_to: 'Stad 2',
  detailed_from: 'Stad 1 Märket',
  detailed_to: 'Ort 11113',
  date_from: '2017',
  date_to: '2018-03',
  vehicle_name: 'Another boat',
  journey_reason: 'Business',
},{
  short_from:'Stad 1', 
  short_to: 'Stad 2',
  detailed_from: 'Stad 1 Väg 234 Sidospår 7 Genväg 23123 Linje 3',
  detailed_to: 'Stad 2 Ikea ',
  date_from: '2017',
  date_to: '2018-03',
  vehicle_name: 'Boat with a very long name to test for anomalies',
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
          <FilterButton toggle={this.toggleFilter}/>
          <FilterSide toggled={this.state.display_filters} toggle={this.toggleFilter} vehicles={journeys.map(journey => journey.vehicle_name).filter((v, i, s) => s.indexOf(v) === i)}/>
      </Content>
    );
  }
}

export default JourneysPage;