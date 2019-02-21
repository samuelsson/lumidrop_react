import React, { Component } from 'react';
import Header from './Header/Header';
import Footer from './Footer/Footer';

class ViewDefault extends Component {
    render() {
        return (
            <div className="wrapper">
                <Header/>
                <section className="main">
                    {this.props.children}
                </section>
                <Footer/>
            </div>
        );
    }
}

export default ViewDefault;
