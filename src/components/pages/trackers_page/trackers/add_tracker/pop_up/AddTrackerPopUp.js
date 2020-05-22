import React from 'react';
import './AddTrackerPopUp.scss';

const AddTrackerPopUp = () => (
    <div className="add-tracker-pop-up-container">
        <i className="material-icons serial-back-arrow">clear</i>
        <div className="add-serial-container">
            <p className="serial-number-information">To add your device, enter the serial number. This information is available on your device and packaging.</p>
            <input className="serial-number-input" type="text" placeholder="Enter serial number" />
        </div>
        <button className="serial-number-next-button">NEXT</button>
    </div>
) 

export default AddTrackerPopUp;