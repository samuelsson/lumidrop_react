import React, { Component } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import ViewFull from '../../containers/ViewFull';
import Navigation from './Navigation';

import General from './General';
import Account from './Account';
import Security from './Security';

class Settings extends Component {
    render() {
        const { match } = this.props;

        return (
            <ViewFull sidebarLeftContent={<Navigation match={match}/>}>
                <Switch>
                    <Redirect exact path={match.path} to={`${match.path}/general`}/>
                    <Route path={`${match.path}/general`} component={General}/>
                    <Route path={`${match.path}/account`} component={Account}/>
                    <Route path={`${match.path}/security`} component={Security}/>
                    <Redirect path={`${match.path}/*`} to={match.path}/>
                </Switch>
            </ViewFull>
        );
    }
}

export default Settings;
