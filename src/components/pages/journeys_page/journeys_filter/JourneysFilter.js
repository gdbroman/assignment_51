import React from 'react';
import ToggleSetting from '../../../setting_toggle/ToggleSetting'
import './JourneysFilter.scss';


const Filter = ({filter}) => (
    <ToggleSetting title={filter} customClickEvent={()=>{}}/>
);


export default class JourneysFilter extends React.Component{
    render() {
        return (
            <div className={this.props.toggled ? "filter-tab-container" : "filter-tab-container filter-tab-show"}>
                <i className="material-icons filter-back" onClick={this.props.toggleFilter}>clear</i>
                <p className="filter-title">Filters</p>
                {this.props.vehicles.map(vehicle => <Filter filter={vehicle}/>)}
            </div>
        );
    }
 }
