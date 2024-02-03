"use client"
import React from 'react';
import Head from 'next/head';
import { InfoLayout} from '@app/layouts';
import BecomeAShopper from '@app/components/templates/DefaultPages/Become-A-Shopper';

function BecomeAShopperPage(): JSX.Element {
    return (
        <>
            <Head>
                <title>Kasia | Become A Shopper</title>
            </Head>
            <BecomeAShopper/>
        </>
    );
}
BecomeAShopperPage.Layout = InfoLayout;

export default BecomeAShopperPage;