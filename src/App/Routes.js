import React, { Component } from 'react';
import { Switch, Route, Redirect } from "react-router-dom";

import Home from './sections/Home';
import Settings from './sections/Settings/Settings';
import PageNotFound from './sections/PageNotFound';

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
