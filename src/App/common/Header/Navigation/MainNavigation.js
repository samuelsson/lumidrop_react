import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import './MainNavigation.scss'

class MainNavigation extends Component {
    render() {
        return (
            <nav className="menu">
                <ul className="main-links">
                    <li className="nav-item" >
                        <NavLink to="/home">Home</NavLink>
                    </li>
                    <li className="nav-item" >
                        <NavLink to="/settings">Settings</NavLink>
                    </li>
                </ul>
            </nav>
        );
    }
}

export default MainNavigation;
