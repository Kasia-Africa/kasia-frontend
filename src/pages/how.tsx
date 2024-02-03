import React from 'react';
import Head from 'next/head';
import { InfoLayout} from '@app/layouts';
import HowTo from '@app/components/templates/DefaultPages/HowTo';

function Info(): JSX.Element {
    return (
        <>
            <Head>
                <title>Kasia | Info</title>
            </Head>
            <HowTo/>
        </>
    );
}
Info.Layout = InfoLayout;

export default Info;