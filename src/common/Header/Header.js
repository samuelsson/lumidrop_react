import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Logo from './Logo';
import MainNavigation from './Navigation/MainNavigation';
import UserDetails from './UserDetails';

import './Header.scss'

const Header = ({ toggleSidebar }) => {
    const hasSidebarLeft = !!toggleSidebar;
    const sidebarToggle = (<FontAwesomeIcon icon="bars" onClick={toggleSidebar} className={'sidebar-toggle-button'} />);

    return (
        <header>
            <div className="left-container">
                <Logo/>
                {hasSidebarLeft && sidebarToggle}
            </div>
            <MainNavigation/>
            <UserDetails/>
        </header>
    );
};

export default Header;
