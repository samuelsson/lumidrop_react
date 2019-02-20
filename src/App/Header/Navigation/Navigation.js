import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './Navigation.scss'

class Navigation extends Component {
    render() {
        return (
            <nav className="menu">
                <ul className="main-links">
                    <li className="nav-item" >
                        <Link to="/">Home</Link>
                    </li>
                    <li className="nav-item" >
                        <Link to="/settings">Settings</Link>
                    </li>
                </ul>
            </nav>
        );
    }
}

export default Navigation;
