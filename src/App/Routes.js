import React, { Component } from 'react';
import { Switch, Route } from "react-router-dom";

import Home from './Home';
import Settings from './sections/Settings/Settings';

class Routes extends Component {
    render() {
        return (
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/settings" component={Settings}/>
            </Switch>
        )
    }
}

export default Routes;
