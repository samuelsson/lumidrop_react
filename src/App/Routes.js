import React, { Component } from 'react';
import { Switch, Route, Redirect } from "react-router-dom";

import Home from './pages/Home';
import Settings from './pages/Settings/Settings';
import PageNotFound from './pages/PageNotFound';

class Routes extends Component {
    render() {
        return (
            <Switch>
                <Redirect exact path="/" to={'/home'}/>
                <Route path="/home" component={Home}/>
                <Route path="/settings" component={Settings}/>
                <Route path="*" component={PageNotFound}/>
            </Switch>
        )
    }
}

export default Routes;
