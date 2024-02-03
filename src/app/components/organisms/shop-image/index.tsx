import Images from '@app/components/atoms/Image';
import { PageWrapper } from '@app/components/ui/PageElement';
import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';

const BannerImageContainer = styled.div`
// position: relative;
// bottom: 70px;
// width: 100%;
position: absolute;
top: 0;
margin-top: 185px;
`;
const ImageArrow = styled.div`
    width: 1223px;
    display: flex;
    margin: 0 auto;
    justify-content: space-between;
    position: relative;
    bottom: 160px;
`;
const ImageDots = styled.div`
    display: flex;
    justify-content: center;
    position: relative;
    bottom: 80px;
`;
export const ShoppingHeaderImage = ()=> {
    return (
        <PageWrapper>
           <BannerImageContainer>
            <Images
                src='/fruits.svg'
                width={1223}
                height={275}
                alt=''
                />
        <ImageArrow>
                    <Image
                     src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='44' height='40' fill='none'%3E%3Crect width='40' height='40' fill='%23fff' rx='2.667'/%3E%3Cpath fill='%23000' fill-rule='evenodd' d='m23.31 14-6.642 6 6.642 6 1.358-1.227L19.385 20l5.283-4.773L23.31 14Z' clip-rule='evenodd'/%3E%3C/svg%3E"
                     alt='arrow left'
                     width={40}
                     height={40}
                    /> 
                     <Image
                     src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' fill='none'%3E%3Crect width='40' height='40' fill='%23fff' rx='2.667' transform='matrix(-1 0 0 1 40 0)'/%3E%3Cpath fill='%23000' fill-rule='evenodd' d='m16.69 14 6.642 6-6.642 6-1.358-1.227L20.615 20l-5.283-4.773L16.69 14Z' clip-rule='evenodd'/%3E%3C/svg%3E"
                     alt='arrow right'
                     width={40}
                     height={40}
                    />             
        </ImageArrow>
               <ImageDots>
                <Image
                 src='/dot.svg'
                 alt=''
                 height={13}
                 width={71}
                />
            </ImageDots>
                </BannerImageContainer>   
        </PageWrapper>
       
    )
}