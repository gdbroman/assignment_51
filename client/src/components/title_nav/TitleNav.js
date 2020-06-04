import React from 'react';
import './TitleNav.scss';
import { NavLink, } from 'react-router-dom';

class TitleNav extends React.Component {
    render() {
        return (
            <div className="title">
                <NavLink to={this.props.backlink} >
                    <div className="icon"><span className="material-icons">arrow_back</span></div>
                </NavLink>
                <h1>{this.props.title}</h1>
            </div>
        );
    }
}

export default TitleNav;