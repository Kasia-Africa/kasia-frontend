import Images from '@app/components/atoms/Image';
import Slider from 'react-slick';
import { PageWrapper } from '@app/components/ui/PageElement';
import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';

const BannerImageContainer = styled.div`
position: relative;
width: 100%;
top: -75px;

    .slick-slider {
        .arrow {
            position: absolute;
            top: 50%;
            z-index: 1;
            cursor: pointer;

            &.left {
                left: 0;
            }

            &.right {
                right: 0;
            }
        }

        .slick-dots {
            position: absolute;
            bottom: 50px;

            li {
                width: 12px;
                height: 12px;
                background-color: ${({ theme }) => theme.color?.white};
                border-radius: 50%;

                button {
                    &:before {
                        display: none;
                    }
                }

                &.slick-active {
                    background-color: ${({ theme }) => theme.color?.green};
                    
                    button {
                        &:before {
                            display: none;
                        }
                    }
                    
                }
            }
        }
    }
`;

const Arrows = (props : { className : string, onClick ?: any, isNext?: boolean } ) => {
    const { onClick, isNext } = props;
    return (
        <Image
        src={ isNext ? "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' fill='none'%3E%3Crect width='40' height='40' fill='%23fff' rx='2.667' transform='matrix(-1 0 0 1 40 0)'/%3E%3Cpath fill='%23000' fill-rule='evenodd' d='m16.69 14 6.642 6-6.642 6-1.358-1.227L20.615 20l-5.283-4.773L16.69 14Z' clip-rule='evenodd'/%3E%3C/svg%3E" : "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='44' height='40' fill='none'%3E%3Crect width='40' height='40' fill='%23fff' rx='2.667'/%3E%3Cpath fill='%23000' fill-rule='evenodd' d='m23.31 14-6.642 6 6.642 6 1.358-1.227L19.385 20l5.283-4.773L23.31 14Z' clip-rule='evenodd'/%3E%3C/svg%3E" }
        alt={isNext ? 'arrow right' :  'arrow left'}
        width={40}
        height={40}
        className={isNext ? 'arrow right' :  'arrow left'}
        onClick={onClick}
       /> 
    )
}
export const ShoppingHeaderImage = ()=> {

    const slickSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <Arrows className='slick-next' isNext/>,
        prevArrow: <Arrows className='slick-prev' />
      };

    const featuredImages = [
        {
            title : 'Featured Image 1',
            link : '#',
        },
        {
            title : 'Featured Image 2',
            link : '#',
        },
        {
            title : 'Featured Image 3',
            link : '#',
        },
    ];

    return (
        <PageWrapper>
           <BannerImageContainer>
           <Slider {...slickSettings}>
           { featuredImages.length > 0 && ( featuredImages.map((featuredImage, i)=> {
            return <Images
                 src='/banners/banner-1.png'
                 width={1223}
                 height={275}
                 alt={featuredImage.title}
                 key={i}
                 className='w-full'
                 />
           }) )
        }
            </Slider>
        </BannerImageContainer>   
        </PageWrapper>
       
    )
}