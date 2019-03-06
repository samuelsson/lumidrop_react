import React from 'react';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import SidebarLeft from './SidebarLeft/SidebarLeft';

const ViewFull = ({ children, sidebarLeftContent }) => {
    return (
        <div className="wrapper-full">
            <Header/>
            <SidebarLeft content={sidebarLeftContent}/>
            <section className="main">
                {children}
            </section>
            <Footer/>
        </div>
    );
};

export default ViewFull;
