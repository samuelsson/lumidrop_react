import React, { Component } from 'react';

import './SidebarLeft.scss'

class SidebarLeft extends Component {
    render() {
        return (
            <aside className="sidebar-left">
                {this.props.content}
            </aside>
        );
    }
}

export default SidebarLeft;
