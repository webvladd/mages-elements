import React from 'react';

import RegisterFort from '../../components/RegisterForm'

import s from './RegisterPage.module.scss';

const RegisterPage = () => {
    return (
        <div className={s.root}>
            <RegisterFort />
        </div>
    )
}

export default RegisterPage;