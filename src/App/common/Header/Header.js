import React from 'react';
import Logo from './Logo';
import MainNavigation from './Navigation/MainNavigation';
import UserDetails from './UserDetails';

import './Header.scss'

const Header = ({ toggleSidebar }) => {
    const hasSidebarLeft = !!toggleSidebar;

    return (
        <header>
            <div className="left-container">
                <Logo/>
                {hasSidebarLeft && <button onClick={toggleSidebar}>Toggle Sidebar</button>}
            </div>
            <MainNavigation/>
            <UserDetails/>
        </header>
    );
};

export default Header;
