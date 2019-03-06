import React from 'react';
import Footer from './Footer/Footer';

const ViewClean = ({ children }) => {
    return (
        <div className="wrapper-clean">
            <section className="main">
                {children}
            </section>
            <Footer/>
        </div>
    );
};

export default ViewClean;
