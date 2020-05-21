import React from 'react';
import './Vehicle.scss';

class Tab_page extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            type: "boat",
            name: "Bogserbåt Grimmen",
            events: {date: "21.05.2020 14:58", description: "Rörde sig"},
        }
    }

    openSettings() {
        
    }

    getSymbol() {
        const type = this.state.type;
        if (type === "boat") {
            return "directions_boat";
        }
        else if (type === "car") {
            return "directions_car";
        }
        else if (type === "bike") {
            return "two_wheeler";
        }
        else {
            return "gps_fixed";
        }
    }

    render() {
        return (
            <div className="vehicle">
                <span className="material-icons">{this.getSymbol()}</span>
                <div className="text">
                    <p className="name">{this.props.info.name}</p>
                    <p className="date">{this.props.info.date}</p>
                </div>
            </div>
        );
    }
}

export default Tab_page;