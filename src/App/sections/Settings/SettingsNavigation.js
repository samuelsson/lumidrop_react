import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class SettingsNavigation extends Component {
    render() {
        const { match } = this.props;

        return (
            <div>
                <ul>
                    <li><NavLink to={`${match.url}/general`}>General</NavLink></li>
                </ul>
            </div>
        );
    }
}

export default SettingsNavigation;
