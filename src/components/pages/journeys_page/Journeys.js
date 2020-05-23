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
  vehicle_name: 'Boat',
  journey_reason: 'Business',
}]

class JourneysPage extends React.Component {
  componentDidMount() {
    document.title = 'Journeys | Possio Alarm';
  }

  render() {
    return (
      <div className="location_page">
          {journeys.map(journey => <Journey journey={journey} />)}
      </div>
    );
  }
}

export default JourneysPage;