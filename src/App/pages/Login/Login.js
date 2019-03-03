import React, { Component } from 'react';
import ViewClean from '../../common/ViewClean';

import './Login.scss'
import * as Button from '../../common/Button/Button';

class Login extends Component {
    render() {
        const login = () => console.log('log in');

        return (
            <ViewClean>
                <div className="login-wrapper">
                    <div className="header">
                        <img className="logo" src={'/images/lumidrop_logo.svg'} alt="lumidrop logo"/>
                        <div><h1>Login</h1></div>
                    </div>
                    <div className="content">
                        <form noValidate>
                            <label>
                                <span>Username</span>
                                <input
                                    type="text"
                                    name="username"
                                    autoFocus/>
                            </label>
                            <br/>
                            <br/>
                            <label>
                                <span>Password</span>
                                <input
                                    type="password"
                                    name="password"/>
                            </label>
                            <br/>
                            <br/>
                            <Button.Primary text={'Login'} fullWidth={true} onClick={login}/>
                        </form>
                    </div>
                    <div className="footer">
                        If you don't have an account you can register one here.
                    </div>
                </div>
            </ViewClean>
        );
    }
}

export default Login;
