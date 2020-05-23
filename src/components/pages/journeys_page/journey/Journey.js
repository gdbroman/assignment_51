import React from 'react';
import './Journey.scss';

const Route = ({detailed_address, date}) => (
    <div className="route-container">
        <p className="route-text">{detailed_address}</p>
        <p className="route-text">{date}</p>
    </div>
)


const Journey = ({journey: {short_from, short_to, detailed_from, detailed_to, date_from, date_to, vehicle_name, journey_reason}}) => (
        <div className="journey-container">
            <div className="journey-vehicle-info">
                <div className="journey-icon-container">
                    <p className="journey-reason">{journey_reason}</p>
                    <span className="material-icons journey-vehicle-icon">directions_boat</span>
                </div>
                <div className="journey-info">
                    <p className="journey-destinations">{short_from} - {short_to}</p>
                    <p className="journey-vehicle-name">{vehicle_name}</p>
                </div>
            </div>
            <div className="journey-route-container">
                <Route detailed_address={detailed_from} date={date_from}/>
                <Route detailed_address={detailed_to} date={date_to}/>
            </div>
        </div>
    )

export default Journey;