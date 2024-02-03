import React, { ReactNode } from 'react';
import { BreakpointProvider } from 'react-socks';
import './globals.css'
import GlobalStyles from './global';


export default function KasiaStyles(props: { children: ReactNode }) {
    return (
        <>
            <GlobalStyles />
            <BreakpointProvider>{props.children}</BreakpointProvider>
        </>
    );
}