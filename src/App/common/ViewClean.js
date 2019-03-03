import React, { Component } from 'react';
import Footer from './Footer/Footer';

class ViewClean extends Component {
    render() {
        return (
            <div className="wrapper-clean">
                <section className="main">
                    {this.props.children}
                </section>
                <Footer/>
            </div>
        );
    }
}

export default ViewClean;
