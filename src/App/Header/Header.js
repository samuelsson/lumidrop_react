import React, { Component } from 'react';
import Logo from './Logo';
import Navigation from './Navigation/Navigation';
import UserDetails from './UserDetails';

import './Header.scss'

class Header extends Component {
    render() {
        return (
            <header>
                <Logo/>
                <Navigation/>
                <UserDetails/>
            </header>
        );
    }
}

export default Header;
