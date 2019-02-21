import React, { Component } from 'react';

import Header from './Header/Header';
import Routes from './Routes'
import Footer from './Footer/Footer';

import './App.scss';

class App extends Component {
    render() {
        return (
            <div className="wrapper">
                <Header/>
                <Routes/>
                <Footer/>
            </div>
        );
    }
}

export default App;
