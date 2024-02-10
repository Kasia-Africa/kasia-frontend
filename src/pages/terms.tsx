import React from 'react';
import Head from 'next/head';
import { InfoLayout} from '@app/layouts';
import TermsAndCondition from '@app/components/templates/DefaultPages/Terms';

function TNC(): JSX.Element {
    return (
        <>
            <Head>
                <title>Kasia | Terms And Conditions</title>
            </Head>
            <TermsAndCondition/>
        </>
    );
}
TNC.Layout = InfoLayout;

export default TNC;