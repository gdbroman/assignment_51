import React from 'react';
import './LocationHistory.scss';
import Vehicle from '../vehicle/Vehicle';
import DatePicker from "react-datepicker";
import Button from  '../button/Button';
import "react-datepicker/dist/react-datepicker.css";

class LocationHistory extends React.Component {
    state = {
        startDate: new Date()
    };

    handleChange = date => {
        this.setState({
          startDate: date
        });
    };

    render() {
        return (
            <div className="lochist">
                <Vehicle info={this.props.info} />
                <div className="choose">
                    <div className="d">
                        <p>
                            Choose date
                        </p>
                        <DatePicker
                            selected={this.state.startDate}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div class="t">
                        <p>
                            From
                        </p>
                        <input type="time" defaultValue="17:00" required></input>
                    </div>
                    <div class="t">
                        <p>
                            To
                        </p>
                        <input type="time" defaultValue="18:00" required></input>
                    </div>
                    <Button text="Apply" />
                </div>
            </div>
        );
    }
}

export default LocationHistory;