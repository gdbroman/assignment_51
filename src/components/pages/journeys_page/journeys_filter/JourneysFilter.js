import React from 'react';
import ToggleSetting from '../../../setting_toggle/ToggleSetting'
import './JourneysFilter.scss';


const Filter = ({filter}) => (
    <ToggleSetting title={filter} customClickEvent={()=>{}}/>
);


const JourneysFilter = ({toggled, vehicles}) => (
    <div className={toggled ? "filter-tab-container" : "filter-tab-container filter-tab-show"}>
        <p className="filter-title">Filters</p>
        {vehicles.map(vehicle => <Filter filter={vehicle}/>)}
    </div>

);

export default JourneysFilter