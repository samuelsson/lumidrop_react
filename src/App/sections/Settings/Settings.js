import React, { Component } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import ViewFull from '../../common/ViewFull';
import General from './General';
import SettingsNavigation from './SettingsNavigation';

class Settings extends Component {
    render() {
        const { match } = this.props;

        return (
            <ViewFull sidebarLeftContent={<SettingsNavigation match={match}/>}>
                <Switch>
                    <Redirect exact path={match.path} to={`${match.path}/general`}/>
                    <Route path={`${match.path}/general`} component={General}/>
                    <Redirect path={`${match.path}/*`} to={match.path}/>
                </Switch>
            </ViewFull>
        );
    }
}

export default Settings;
