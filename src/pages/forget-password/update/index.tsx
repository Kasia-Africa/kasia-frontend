import React from 'react';
import Head from 'next/head';
import { NextPageContext } from 'next';
import { AuthLayout } from '@app/layouts';
import ResetPassword from '@app/components/templates/ResetPassword';

function ResetPasswordPage({ email, reset_code } : { email: string, reset_code: number }): JSX.Element {
    return (
        <>
            <Head>
                <title>Kasia | Reset { email }</title>
            </Head>
            <ResetPassword initialEmail={email} initialResetCode={reset_code} />
            </>
    );
}
ResetPasswordPage.Layout = AuthLayout;

export const getServerSideProps = async (ctx: NextPageContext) => {
    const email = ctx.query.email;
    const reset_code = ctx.query.code;
    return {
        props: { email, reset_code }
    }
};

export default ResetPasswordPage;