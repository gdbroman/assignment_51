import React from 'react';
import Journey from './journey/Journey'
import './Journeys.scss';


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
  vehicle_name: 'Båte',
  journey_reason: 'Business',
}]

class JourneysPage extends React.Component {
  componentDidMount() {
    document.title = 'Journeys | Possio Alarm';
  }

  render() {
    return (
      <div className="">
          {journeys.map(journey => <Journey journey={journey} />)}
      </div>
    );
  }
}

export default JourneysPage;