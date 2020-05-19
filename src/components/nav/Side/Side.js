import React from 'react';
import './Side.scss';
import { NavLink } from 'react-router-dom';

class Side extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            active: true,
        };
    }

    slide = () => {
        const currentState = this.state.active;
        this.setState({ active: !currentState });
    };

    render() {
        return (
            <aside className={this.state.active ? "show": "hide"} >
                <nav className="side">
                    <ul>
<<<<<<< HEAD
                    <NavLink to ="/" exact={true} activeClassName='active'>
                        <li><i className="material-icons">map</i><p>Location</p></li>
                    </NavLink>
                    <NavLink to ="/trackers">
                        <li><i className="material-icons">list</i><p>Possio Trackers</p></li>
                    </NavLink>
                    <NavLink to ="/fences">
                        <li><i className="material-icons">tab_unselected</i><p>Geo-fences</p></li>
                    </NavLink>
                    <NavLink to ="/journeys">
                        <li><i className="material-icons">device_hub</i><p>Journeys</p></li>
                    </NavLink>
                    <NavLink to ="/events"><div className="bb">
                        <li><i className="material-icons">notifications</i><p>Events</p></li></div>
                    </NavLink>
                    <NavLink to ="/users">
                        <li><i className="material-icons">people</i><p>Users</p></li>
                    </NavLink>
                    <NavLink to ="/profile">
                        <li><i className="material-icons">settings</i><p>Profile</p></li>
                    </NavLink>
                    <NavLink to ="/support">
                        <div className="bb"><li><i className="material-icons">public</i><p>Support</p></li></div>
                    </NavLink>
                    <NavLink to ="/logout">
                        <li><i className="material-icons">exit_to_app</i><p>Log out</p></li>
                    </NavLink>
=======
                        <NavLink to ="/" exact={true} activeClassName='active'><li><i className="material-icons">map</i><p>Location</p></li></NavLink>
                        <NavLink to ="/trackers"><li><i className="material-icons">list</i><p>Possio Trackers</p></li></NavLink>
                        <NavLink to ="/fences"><li><i className="material-icons">tab_unselected</i><p>Geo-fences</p></li></NavLink>
                        <NavLink to ="/journeys"><li><i className="material-icons">device_hub</i><p>Journeys</p></li></NavLink>
                        <NavLink to ="/events"><div className="bb"><li><i className="material-icons">notifications</i><p>Events</p></li></div></NavLink>
                        <NavLink to ="/users"><li><i className="material-icons">people</i><p>Users</p></li></NavLink>
                        <NavLink to ="/profile"><li><i className="material-icons">settings</i><p>Profile</p></li></NavLink>
                        <NavLink to ="/support"><div className="bb"><li><i className="material-icons">public</i><p>Support</p></li></div></NavLink>
                        <NavLink to ="/logout"><li><i className="material-icons">exit_to_app</i><p>Log out</p></li></NavLink>
                        <NavLink to ="/welcome"><li><i className="material-icons">people</i><p>Log in</p></li></NavLink>
>>>>>>> 12455fb1ade18827b3f0294538a8c6d9551ab006
                    </ul>
                </nav>
                <div className={this.state.active ? "overlay show": "overlay"} onClick={this.slide}></div>
            </aside>
        )
    }
}

export default Side;
