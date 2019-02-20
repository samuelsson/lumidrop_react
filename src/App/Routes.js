import React, { Component } from 'react';
import { Route } from "react-router-dom";

import Home from './Home';
import Settings from './Settings';

class Routes extends Component {
    render() {
        return (
            <div className="main">
                <Route exact path="/" component={Home}/>
                <Route path="/settings" component={Settings}/>
            </div>
        )
    }
}

export default Routes;
