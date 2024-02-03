import React from 'react';
import Head from 'next/head';

import { AuthLayout } from '@app/layouts';
import LoginPage from '@app/components/templates/Login';




function Login(): JSX.Element {
    return (
        <>
            <Head>
                <title>Login | Plusity</title>
            </Head>
            <LoginPage />
        </>
    );
}
Login.Layout = AuthLayout;

export default Login;