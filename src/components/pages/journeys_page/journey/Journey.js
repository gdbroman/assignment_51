import React from 'react';


const Route = ({detailed_address, date}) => (
    <div className="route-container">
        <p>{detailed_address}</p>
        <p className="">{date}</p>
    </div>
)


const Journey = ({journey: {short_from, short_to, detailed_from, detailed_to, date_from, date_to, vehicle_name, journey_reason}}) => (
        <div className="journey-container">
            <p>{short_from} - {short_to}</p>
            <p className="journey-reason">{journey_reason}</p>
            <div className="journey-vehicle-container">
                <span className="material-icons journey-vehicle-icon">directions_boat</span>
                <p>{vehicle_name}</p>
            </div>
            <div className="journey-route-container">
                <Route detailed_address={detailed_from} date={date_from}/>
                <Route detailed_address={detailed_to} date={date_to}/>
            </div>
        </div>
    )

export default Journey;