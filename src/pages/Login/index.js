import React from 'react';
import LoginForm from '../../components/LoginForm';

import s from './LoginPage.module.scss';

const LoginPage = () => {
    return (
        <div className={s.root}>
            <LoginForm />
        </div>
        
    )
}

export default LoginPage;