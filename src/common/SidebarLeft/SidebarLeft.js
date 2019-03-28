import React from 'react';

import './SidebarLeft.scss'

const SidebarLeft = ({ content, visible }) => {
    return (
        <aside className={`sidebar-left ${visible ? 'sidebar-left-visible' : 'sidebar-left-hidden'}`}>
            {content}
        </aside>
    );
};

export default SidebarLeft;
