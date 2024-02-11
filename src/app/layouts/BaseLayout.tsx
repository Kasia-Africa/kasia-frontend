import React, { ReactNode, useEffect, useState} from 'react';
import { MainHeader } from '@modules/header';
import {PageWrapper } from '@app/components/ui/PageElement';
import { MainFooter } from '@modules/footer';
import styled from 'styled-components';
import useLogout from '@app/hooks/useLogout';
import Loader from '@app/components/atoms/Loader';
interface Props {
    children?: ReactNode;
}

const BasePageWrapper= styled.section`
  display: flex;
  flex-shrink: 0;
  flex-direction: column;
  height: 255px;
  background-color: ${({ theme }) => theme.color.darkgreen};
  position: relative;
`;
const BaseBackground = styled.div`
background-color: #F2F2F2;
`;
function BaseLayout(props: Props): JSX.Element {
    const { children } = props;
    const [isLogout, setIsLogout] = useState(false)
    const logout = useLogout()

    useEffect(()=> {
        const performLogout = async ()=> {
            try {
               await logout()
               setIsLogout(true)
            } catch {

            }
        }
        isLogout && performLogout()
    }, [logout, isLogout])
    return isLogout ?  (
        <Loader height={500} color='red'/>
    ): (
    <>
       {<PageWrapper bg ="#F2F2F2" isFullWidth>
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
        }
        </>
    )
}

BaseLayout.defaultProps = {
    children: '',
};

export default BaseLayout;