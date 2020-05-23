import React from 'react';
import './Side.scss';
import { NavLink } from 'react-router-dom';

class Side extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            active: false,
            small: true,
        };
    }

    slide = () => {
        const currentState = this.state.active;
        this.setState({ active: !currentState });
    };

    minimize = () => {
        const currentSize = this.state.small;
        this.setState({ small: !currentSize });
    };

    render() {
        return (
            <aside className={this.state.active ? "show": "hide"} >
                <nav className={this.state.small ? "side small": "side"} >
                    <ul>
                    <NavLink to ="/location" exact={true} activeClassName='active'>
                        <li onClick={this.slide}><i className="material-icons">map</i><p>Location</p></li>
                    </NavLink>
                    <NavLink to ="/trackers/active">
                        <li onClick={this.slide}><i className="material-icons">list</i><p>Possio Trackers</p></li>
                    </NavLink>
                    <NavLink to ="/fences">
                        <li onClick={this.slide}><i className="material-icons">tab_unselected</i><p>Geo-fences</p></li>
                    </NavLink>
                    <NavLink to ="/journeys">
                        <li onClick={this.slide}><i className="material-icons">device_hub</i><p>Journeys</p></li>
                    </NavLink>
                    <NavLink to ="/events"><div className="bb">
                        <li onClick={this.slide}><i className="material-icons">notifications</i><p>Events</p></li></div>
                    </NavLink>
                    <NavLink to ="/users">
                        <li onClick={this.slide}><i className="material-icons">people</i><p>Users</p></li>
                    </NavLink>
                    <NavLink to ="/profile">
                        <li onClick={this.slide}><i className="material-icons">settings</i><p>Profile</p></li>
                    </NavLink>
                    <NavLink to ="/support">
                        <div className="bb"><li onClick={this.slide}><i className="material-icons">public</i><p>Support</p></li></div>
                    </NavLink>
                    <NavLink to ="/logout">
                        <li onClick={this.slide}><i className="material-icons">exit_to_app</i><p>Log out</p></li>
                    </NavLink>
                    <NavLink to ="/login">
                        <li onClick={this.slide}><i className="material-icons">people</i><p>Log in</p></li>
                    </NavLink>
                    </ul>
                </nav>
                <div className={this.state.active ? "overlay show": "overlay"} onClick={this.slide}></div>
            </aside>
        )
    }
}

export default Side;
