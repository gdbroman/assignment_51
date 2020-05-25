import React from 'react';
import './JourneysFilter.scss';

const filters = [
    'text',
    'amount'
]

const Filter = ({filter}) => (
    <div className="filter-container">
        <p className="filter-name">{filter}</p>
    
    </div>
);


const JourneysFilter = ({toggled}) => (
    <div className={toggled ? "filter-tab-container" : "filter-tab-container filter-tab-show"}>
        <p className="filter-title">Filters</p>
        {filters.map(filter => <Filter filter={filter}/>)}
    </div>

);

export default JourneysFilter