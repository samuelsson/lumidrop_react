import React from 'react';

import styles from './SidebarLeft.module.scss'

const SidebarLeft = ({ content, visible }) => {
    return (
        <aside className={`${styles.sidebarLeft} ${visible ? styles.visible : styles.hidden}`}>
            {content}
        </aside>
    );
};

export default SidebarLeft;
