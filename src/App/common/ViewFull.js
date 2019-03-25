import React, { Component } from 'react';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import SidebarLeft from './SidebarLeft/SidebarLeft';
import ErrorBoundary from './ErrorBoundary';

class ViewFull extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sidebarVisible: true
        }
    }

    onSidebarLeftToggle = () => {
        this.setState({ sidebarVisible: !this.state.sidebarVisible });
    };

    render() {
        return (
            <div className="wrapper-full">
                <Header toggleSidebar={this.onSidebarLeftToggle}/>
                <SidebarLeft content={this.props.sidebarLeftContent} visible={this.state.sidebarVisible}/>
                <ErrorBoundary>
                    <section className="main">
                        {this.props.children}
                    </section>
                </ErrorBoundary>
                <Footer/>
            </div>
        );
    }
}

export default ViewFull;
