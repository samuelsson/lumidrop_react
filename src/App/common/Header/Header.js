import React, { Component } from 'react';
import Logo from './Logo';
import MainNavigation from './Navigation/MainNavigation';
import UserDetails from './UserDetails';

import './Header.scss'

class Header extends Component {
    render() {
        return (
            <header>
                <Logo/>
                <MainNavigation/>
                <UserDetails/>
            </header>
        );
    }
}

export default Header;
