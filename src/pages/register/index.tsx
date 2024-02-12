import React from 'react';
import Head from 'next/head';
import Script from "next/script";
import { AuthLayout } from '@app/layouts';
import RegisterPage from '../../app/components/templates/Register';

function Register(): JSX.Element {
    return (
        <>
            <Head>
                <title>Register | Plusity</title>
            </Head>
            <RegisterPage />
             <Script
            src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBfZGKX2eI8YWey2xWEct0hXqZot0cWc6I&libraries=places"
            />
        </>
    );
}
Register.Layout = AuthLayout;

export default Register;