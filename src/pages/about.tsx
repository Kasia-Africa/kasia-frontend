"use client"
import React from 'react';
import Head from 'next/head';
import { InfoLayout} from '@app/layouts';
import AboutUs from '@app/components/templates/DefaultPages/About';

function About(): JSX.Element {
    return (
        <>
            <Head>
                <title>Kasia | Info</title>
            </Head>
            <AboutUs/>
        </>
    );
}
About.Layout = InfoLayout;

export default About;