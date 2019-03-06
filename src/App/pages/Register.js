import React from 'react';
import ViewClean from '../common/ViewClean';

import * as Button from '../common/Button/Button';
import FormBox from '../common/FormBox/FormBox';

const Register = () => {
    const register = () => console.log('register');

    const button = <Button.Primary text={'Register'} fullWidth={true} onClick={register}/>;
    const footer = 'If you already have an account you can login here.';
    const inputs = [
        { type: 'text', name: 'username' },
        { type: 'password', name: 'password' },
        { type: 'text', name: 'first-name' },
        { type: 'text', name: 'last-name' }
    ] ;

    return (
        <ViewClean>
            <FormBox header={'Register'} inputs={inputs} button={button} footer={footer}/>
        </ViewClean>
    );
};

export default Register;
