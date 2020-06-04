import React from 'react';
import './Overlay.scss';

const Overlay = (props) => (
    <div className={props.active ? "content-overlay overlay-active": "content-overlay"} onClick={props.toggle}>

    </div>
) 

export default Overlay