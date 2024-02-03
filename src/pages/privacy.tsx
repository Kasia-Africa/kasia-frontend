import React from 'react';
import Head from 'next/head';
import { InfoLayout} from '@app/layouts';
import Privacy from '@app/components/templates/DefaultPages/Privacy';

function PnP(): JSX.Element {
    return (
        <>
            <Head>
                <title>Kasia | Privacy</title>
            </Head>
            <Privacy/>
        </>
    );
}
PnP.Layout = InfoLayout;

export default PnP;