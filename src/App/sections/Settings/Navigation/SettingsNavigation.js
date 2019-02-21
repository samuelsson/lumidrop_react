import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import './SettingsNavigation.scss'

class SettingsNavigation extends Component {
    render() {
        const { match } = this.props;

        return (
            <div className={'settings-navigation'}>
                <ul>
                    <li><NavLink to={`${match.url}/general`}>General</NavLink></li>
                </ul>
            </div>
        );
    }
}

export default SettingsNavigation;
