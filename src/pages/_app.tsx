import React, { useEffect } from 'react';
import HEAD from 'next/head';
import KasiaStyles from '@app/styles/themeProvider';
import NotificationContainer from '@app/notification/container';
import Fonts from '@app/utils/font';
import App from 'next/app';
import Router from 'next/router';
import NProgress from 'nprogress';
import { SWRConfig } from 'swr';
import { ScreenClassProvider } from 'react-grid-system';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import { ThemeProvider } from 'styled-components';
import theme from '@app/styles/theme';
import '../app/styles/globals.css';

Router.events.on('routeChangeStart', () => {
    NProgress.start();
});

Router.events.on('routeChangeComplete', () => {
    NProgress.done();
});

Router.events.on('routeChangeError', () => NProgress.done());

function MainApp(props: any) {
    const { Component, pageProps, cookies } = props;
    const { Layout, ...others } = Component;

    useEffect(() => {
        Fonts();
    }, []);

    return (
        <ThemeProvider theme={theme}>
            <NotificationContainer />
            <SWRConfig
                value={{
                revalidateOnFocus: false,
                revalidateOnReconnect: true,
                }}
            >
            <ScreenClassProvider>
            <HEAD>
                        <meta name="theme-color" content={theme.color.green} />
                    </HEAD>
                <KasiaStyles>
                        {Layout ? (
                            <Layout {...others} {...props}>
                                <Component {...pageProps} />
                            </Layout>
                        ) : (
                            <Component {...pageProps} cookies={cookies} />
                        )
                        }
                </KasiaStyles>
            </ScreenClassProvider>
            </SWRConfig>
        </ThemeProvider>
    );
}

// @ts-ignore
MainApp.getInitialProps = async (appContext: any) => {
    // const { ctx } = appContext;
    const appProps = await App.getInitialProps(appContext);
    // let userAgent = '';
    // // @ts-ignore
    // if (process && process.browser) {
    //     userAgent = navigator.userAgent;
    // } else {
    //     userAgent = ctx.req.headers['user-agent'];
    // }

    return { ...appProps };
};

export default MainApp;