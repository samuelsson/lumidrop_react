import React from 'react';

import './SidebarLeft.scss'

const SidebarLeft = ({ content }) => {
    return (
        <aside className="sidebar-left">
            {content}
        </aside>
    );
};

export default SidebarLeft;
