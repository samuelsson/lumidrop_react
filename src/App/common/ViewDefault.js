import React from 'react';
import Header from './Header/Header';
import Footer from './Footer/Footer';

const ViewDefault = ({ children }) => {
    return (
        <div className="wrapper">
            <Header/>
            <section className="main">
                {children}
            </section>
            <Footer/>
        </div>
    );
};

export default ViewDefault;
