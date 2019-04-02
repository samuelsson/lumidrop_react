import React, { Component } from 'react';
import SidebarLeftNavigation from '../../common/SidebarLeft/SidebarLeftNavigation/SidebarLeftNavigation';

class Navigation extends Component {
    render() {
        const { match } = this.props;

        const nav = [
            {url: match.url + '/general', name: 'general'},
            {url: match.url + '/users', name: 'users'},
            {type: 'header', name: 'admin'},
            {url: match.url + '/security', name: 'security'}
        ];

        return (
            <div className="settings-navigation" style={{paddingTop: '25px'}}>
                {<SidebarLeftNavigation navItems={nav} />}
            </div>
        );
    }
}

export default Navigation;
