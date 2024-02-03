import React, { ReactNode } from 'react';
import { BodyWrapper, PageWrapper } from '@app/components/ui/PageElement';
import { MainFooter } from '@modules/footer';
import styled from 'styled-components';
import { InfoHeader } from '@app/modules/header';
interface Props {
    children?: ReactNode;
}

const InfoPageWrapper = styled.section`
  min-height: 200px;
  max-width: ${({theme})=> theme.width.containerWidth};
`;

function InfoLayout(props: Props): JSX.Element {

    const { children } = props;
    return (
        <PageWrapper isFullWidth>
            <PageWrapper bg ="#1fa548" isFullWidth>
                <InfoPageWrapper>
                <InfoHeader
                    logoSrc='/plusity-logo.png'
                    appName='kasia'
                    />
                </InfoPageWrapper>
            </PageWrapper>
                <div className='w-full min-h-screen'>
                    <BodyWrapper>{children}</BodyWrapper>
                </div>
            <MainFooter />
        </PageWrapper>
    );
}

InfoLayout.defaultProps = {
    children: '',
};

export default InfoLayout;