import React from 'react';
import Head from 'next/head';
import { InfoLayout} from '@app/layouts';
import DeliveryInfo from '@app/components/templates/DefaultPages/Delivery';

function Delivery(): JSX.Element {
    return (
        <>
            <Head>
                <title>Kasia | Delivery Info</title>
            </Head>
            <DeliveryInfo/>
        </>
    );
}
Delivery.Layout = InfoLayout;

export default Delivery;