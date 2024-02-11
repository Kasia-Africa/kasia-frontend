import React from 'react';
import Head from 'next/head';
import Script from "next/script";
import { AuthLayout } from '@app/layouts';
import SignUpPage from '@components/templates/SignUp';

function Signup(): JSX.Element {
    return (
        <>
            <Head>
                <title>Register | Plusity</title>
            </Head>
            <SignUpPage />
             <Script
            src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBfZGKX2eI8YWey2xWEct0hXqZot0cWc6I&libraries=places"
            />
        </>
    );
}
Signup.Layout = AuthLayout;

export default Signup;