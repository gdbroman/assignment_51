import React from 'react';
import './FilterButton.scss';

const FilterJourneys = ({toggle}) => (
    <div className="filter-container" onClick={toggle}>
        <p className="filter-text">Filters</p>
        <i className="material-icons filter-icon">dehaze</i>
    </div>
);

export default FilterJourneys