import React, { Component } from 'react';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import SidebarLeft from './SidebarLeft/SidebarLeft';

class ViewFull extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sidebarVisible: true
        }
    }

    render() {
        return (
            <div className="wrapper-full">
                <Header/>
                <SidebarLeft content={this.props.sidebarLeftContent} visible={this.state.sidebarVisible}/>
                <section className="main">
                    {this.props.children}
                </section>
                <Footer/>
            </div>
        );
    }
}

export default ViewFull;
