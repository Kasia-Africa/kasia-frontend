"use client"
import React from 'react';
import Head from 'next/head';
import { InfoLayout} from '@app/layouts';
import ContactUs from '@app/components/templates/Contact';
function Contact(): JSX.Element {
    return (
        <>
            <Head>
                <title>Kasia | Contact Us</title>
            </Head>
            <ContactUs />
        </>
    );
}
Contact.Layout = InfoLayout;

export default Contact;