import React from 'react';
import Head from 'next/head';
import Script from "next/script";
import { AuthLayout } from '@app/layouts';
import SignUpPage from '../../app/components/templates/SignUp';

function Register(): JSX.Element {
    return (
        <>
            <Head>
                <title>Register | Plusity</title>
            </Head>
            <SignUpPage/>
             <Script
            src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBfZGKX2eI8YWey2xWEct0hXqZot0cWc6I&libraries=places"
            />
        </>
    );
}
Register.Layout = AuthLayout;

export default Register;