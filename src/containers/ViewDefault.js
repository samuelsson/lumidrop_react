import React from 'react';
import Header from '../common/Header/Header';
import Footer from '../common/Footer/Footer';
import ErrorBoundary from './ErrorBoundary';

const ViewDefault = ({ children }) => {
    return (
        <div className="wrapper">
            <Header/>
            <ErrorBoundary>
                <section className="main">
                    {children}
                </section>
            </ErrorBoundary>
            <Footer/>
        </div>
    );
};

export default ViewDefault;
