import React from 'react';
import EmptyPageImages from '../../../empty_page_image/EmptyPageImage'
import empty_geofence_image from "../../../../assets/img/empty_geofence.png"
import './FenceList.scss'

export default class FenceList extends React.Component {
    empty_text = "You have not set up any geofence"
    empty_smalltext = "Click on 'add geofence' to create a new fence, or choose from the user-created fences list."
    render(){
        return (
            <div>
                {!!this.props.fences ? <EmptyPageImages imgsrc={empty_geofence_image} text={this.empty_text} smalltext={this.empty_smalltext}/> : <p>Here are devices</p>}
            </div>
        );
    }
}