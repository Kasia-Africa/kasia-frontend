import React from 'react';
import Head from 'next/head';
import { AuthLayout } from '@app/layouts';
import ForgotPassword from '@app/components/templates/ForgotPassword';

function ForgetPassword(): JSX.Element {
    return (
        <>
            <Head>
                <title>Kasia | Forgot Password</title>
            </Head>
            <ForgotPassword />
        </>
    );
}
ForgetPassword.Layout = AuthLayout;

export default ForgetPassword;