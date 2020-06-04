import React from 'react';
import EmptyPageImage from '../../empty_page_image/EmptyPageImage'
import Content from '../../content/Content'
import empty_img from '../../../assets/img/empty_events.png'; 
import './Events.scss';

class EventsPage extends React.Component {
  componentDidMount() {
    document.title = 'Events | Possio Alarm';
  }

  render() {
    return (
      <Content>
          <EmptyPageImage imgsrc={empty_img} text="No events available" smalltext="You might have filtered out your devices, or have not yet recieved any events."/>
      </Content>
    );
  }
}

export default EventsPage;