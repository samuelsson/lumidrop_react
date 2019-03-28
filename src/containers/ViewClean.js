import React from 'react';
import Footer from '../common/Footer/Footer';
import ErrorBoundary from './ErrorBoundary';

const ViewClean = ({ children }) => {
    return (
        <div className="wrapper-clean">
            <ErrorBoundary>
                <section className="main">
                    {children}
                </section>
            </ErrorBoundary>
            <Footer/>
        </div>
    );
};

export default ViewClean;
