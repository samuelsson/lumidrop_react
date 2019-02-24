import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import './SidebarLeftNavigation.scss';

class SidebarLeftNavigation extends Component {
    render() {
        const navItems = this.props.navItems.map((item, i) => {
            if (item.type === 'header') {
                return (<li className="nav-header" key={i}>{item.name}</li>);
            } else {
                return (
                    <NavLink to={item.url} key={i}>
                        <li className="nav-item">{item.name}</li>
                    </NavLink>
                );
            }
        });

        return (
            <ul className="sidebar-left-navigation">
                {navItems}
            </ul>
        );
    }
}

export default SidebarLeftNavigation;
