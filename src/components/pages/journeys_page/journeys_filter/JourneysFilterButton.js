import React from 'react';
import './JourneysFilterButton.scss';

const FilterJourneys = ({toggle}) => (
    <div className="journey-filter-container" onClick={toggle}>
        <p className="journey-filter-text">Filters</p>
        <i className="material-icons journey-filter-icon">dehaze</i>
    </div>
);

export default FilterJourneys