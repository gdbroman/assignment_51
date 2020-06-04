import React from 'react';
import './Button.scss';

class Button extends React.Component {
    render() {
        return (
            <button className="button">
                <p>{this.props.text}</p>
            </button>
        );
    }
}

export default Button;
