import React from 'react';
import { NextPageContext } from 'next';
import Head from 'next/head';
import { AuthLayout} from '@app/layouts';
import VerifyEmail from '@app/components/templates/VerifyEmail';

function CheckEmailPage({ email } : { email: string }) {
    return (
        <>
            <Head>
                <title>Kasia | Verify {email || ''}</title>
            </Head>
            <VerifyEmail initialEmail={email}  />
        </>
    );
}

CheckEmailPage.Layout = AuthLayout;

export const getServerSideProps = async (ctx: NextPageContext) => {
    const email = ctx.query.email;
    return {
        props: { email }
    }
    // NB: do a check to verify if this email has done a reset password
    // try {
    //   const response = await postData(`isEmailValid`, { email: ctx.query.email});
    //   console.log(response);
    //   return {
    //     props: { response },
    //   };
    // } catch (e) {
    //     console.log(e);
    //   return { props: {} };
    // }
};

export default CheckEmailPage;