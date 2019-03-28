import React, { Component } from 'react';
import { connect } from 'react-redux';

import ErrorBoundary from './ErrorBoundary';
import Header from '../common/Header/Header';
import Footer from '../common/Footer/Footer';
import SidebarLeft from '../common/SidebarLeft/SidebarLeft';
import { toggleSidebarLeftVisibility } from '../actions';

const mapStateToProps = state => {
    return {
        sidebarLeftVisible: state.sidebarLeftVisible
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onSidebarLeftToggle: () => dispatch(toggleSidebarLeftVisibility())
    }
};

class ViewFull extends Component {
    render() {
        return (
            <div className="wrapper-full">
                <Header toggleSidebar={this.props.onSidebarLeftToggle}/>
                <SidebarLeft content={this.props.sidebarLeftContent} visible={this.props.sidebarLeftVisible}/>
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

export default connect(mapStateToProps, mapDispatchToProps)(ViewFull);
