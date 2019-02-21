import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import ViewFull from '../../common/ViewFull';
import General from './General';

class Settings extends Component {
    render() {
        return (
            <ViewFull>
                <Route path="/settings" component={General}/>
            </ViewFull>
        );
    }
}

export default Settings;
