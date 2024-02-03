import React, { ReactNode } from 'react';
import { BodyWrapper, PageWrapper } from '@app/components/ui/PageElement';
import { MainFooter } from '@modules/footer';
import styled from 'styled-components';
import { AuthHeader } from '@app/modules/header';
interface Props {
    children?: ReactNode;
}

const AuthPageWrapper = styled.section`
  min-height: 100vh;
  background-color: ${({ theme }) => theme.color.green};
  background-image: url('/images/auth-bg.png');
`;

function AuthLayout(props: Props): JSX.Element {

    const { children } = props;
    return (
         <AuthPageWrapper>
            <PageWrapper>
                <div className='w-full min-h-screen'>
                    <AuthHeader
                    logoSrc='/plusity-logo.png'
                    appName='kasia'
                    />
                    <BodyWrapper>{children}</BodyWrapper>
                </div>
            </PageWrapper>
            <MainFooter />
        </AuthPageWrapper>
    );
}

AuthLayout.defaultProps = {
    children: '',
};

export default AuthLayout;