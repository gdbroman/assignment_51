import React from 'react';
import ToggleSetting from '../setting_toggle/ToggleSetting'
import './FilterSide.scss';


const Filter = ({filter}) => (
    <ToggleSetting title={filter} customClickEvent={()=>{}}/>
);


export default class FilterSide extends React.Component{
    render() {
        return (
            <div className={this.props.toggled ? "filter-tab-container filter-tab-show" : "filter-tab-container"}>
                <i className="material-icons filter-back" onClick={this.props.toggle}>clear</i>
                <p className="filter-title">Filters</p>
                {this.props.vehicles.map(vehicle => <Filter filter={vehicle}/>)}
            </div>
        );
    }
 }
