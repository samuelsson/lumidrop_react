import React, { Component } from 'react';
import ViewClean from '../../common/ViewClean';

import './Register.scss'
import * as Button from '../../common/Button/Button';

class Register extends Component {
    render() {
        const register = () => console.log('register');

        return (
            <ViewClean>
                <div className="register-wrapper">
                    <div className="header">
                        <img className="logo" src={'/images/lumidrop_logo.svg'} alt="lumidrop logo"/>
                        <div><h1>Register</h1></div>
                    </div>
                    <div className="content">
                        <form noValidate>
                            <label>
                                <span>Username</span>
                                <input type="text" name="username"/>
                            </label>
                            <br/>
                            <br/>
                            <label>
                                <span>Password</span>
                                <input type="password" name="password"/>
                            </label>
                            <br/>
                            <br/>
                            <div>
                                <label>
                                    <span>First Name</span>
                                    <input type="text" name="first-name"/>
                                </label>
                                <br/>
                                <br/>
                                <label>
                                    <span>Last Name</span>
                                    <input type="text" name="last-name"/>
                                </label>
                            </div>
                            <br/>
                            <Button.Primary text={'Register'} fullWidth={true} onClick={register}/>
                        </form>
                    </div>
                    <div className="footer">
                        If you already have an account you can login here.
                    </div>
                </div>

            </ViewClean>
        );
    }
}

export default Register;
