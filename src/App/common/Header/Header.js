import React from 'react';
import Logo from './Logo';
import MainNavigation from './Navigation/MainNavigation';
import UserDetails from './UserDetails';

import './Header.scss'

const Header = ({ toggleSidebar }) => {
    return (
        <header>
            <Logo/>
            <button onClick={toggleSidebar}>Toggle Sidebar</button>
            <MainNavigation/>
            <UserDetails/>
        </header>
    );
};

export default Header;
