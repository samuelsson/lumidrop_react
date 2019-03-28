import React from 'react';
import Header from '../common/Header/Header';
import Footer from '../common/Footer/Footer';

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
