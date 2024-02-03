import React from 'react';
import Head from 'next/head';
import { InfoLayout} from '@app/layouts';
import TNC from '@app/components/templates/DefaultPages/Terms';

function TnC(): JSX.Element {
    return (
        <>
            <Head>
                <title>Kasia | Terms And Conditions</title>
            </Head>
            <TNC/>
        </>
    );
}
TnC.Layout = InfoLayout;

export default TnC;