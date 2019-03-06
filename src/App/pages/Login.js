import React from 'react';
import ViewClean from '../common/ViewClean';

import * as Button from '../common/Button/Button';
import FormBox from '../common/FormBox/FormBox';

const Login = () => {
    const login = () => console.log('log in');

    const button = <Button.Primary text={'Login'} fullWidth={true} onClick={login}/>;
    const footer = 'If you don\'t have an account you can register one here.';
    const inputs = [
        { type: 'text', name: 'username' },
        { type: 'password', name: 'password' }
    ] ;

    return (
        <ViewClean>
            <FormBox header={'Login'} inputs={inputs} button={button} footer={footer}/>
        </ViewClean>
    );
};

export default Login;
