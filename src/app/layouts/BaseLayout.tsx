import React, { ReactNode } from 'react';
import { MainHeader } from '@modules/header';
import {PageWrapper } from '@app/components/ui/PageElement';
import { MainFooter } from '@modules/footer';
import styled from 'styled-components';
interface Props {
    children?: ReactNode;
}

const BasePageWrapper= styled.section`
  z-index: 1;
  display: flex;
  flex-direction: column;
  min-height: 185px;
  background-color: ${({ theme }) => theme.color.darkgreen};
`;
const BaseBackground = styled.div`
background-color: #F2F2F2;
`
function BaseLayout(props: Props): JSX.Element {
    const { children } = props;
    return (
    <>
        <PageWrapper bg ="#F2F2F2" isFullWidth>
            <BasePageWrapper>
        <PageWrapper className='sticky'>
                    <MainHeader/>
        </PageWrapper>
        </BasePageWrapper>
            <PageWrapper className='w-full min-h-screen' isFullWidth>
                <BaseBackground>{children}</BaseBackground>
            </PageWrapper>
        <MainFooter />
        </PageWrapper>
        </>
    );
}

BaseLayout.defaultProps = {
    children: '',
};

export default BaseLayout;