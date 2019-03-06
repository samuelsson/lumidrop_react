import React from 'react';
import Logo from './Logo';
import MainNavigation from './Navigation/MainNavigation';
import UserDetails from './UserDetails';

import './Header.scss'

const Header = () => {
    return (
        <header>
            <Logo/>
            <MainNavigation/>
            <UserDetails/>
        </header>
    );
};

export default Header;
