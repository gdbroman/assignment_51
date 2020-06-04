import React from 'react';
import './EmptyPageImage.scss'

const EmptyPageImage = (props) => (
    <div className="empty-page-image-container">
        <img className="empty-page-image" alt="" src={props.imgsrc} />
        <p className="empty-page-text">{props.text}</p>
        <p className="empty-page-text-small">{props.smalltext}</p>
    </div>
);

export default EmptyPageImage;