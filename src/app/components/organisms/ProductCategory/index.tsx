import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';
import Slider from 'react-slick';
import ProductCategoryCard from '@app/components/atoms/ProductCategoryCard';
import { RecAndDot } from '@app/components/atoms/rectangleAndDot';
import { useProductCategory } from '@app/hooks/useProductCategory';
import { ProductCategoryData} from '@app/types';
import Loader from '@app/components/atoms/Loader';
import { PageWrapper } from '@app/components/ui/PageElement';
import Arrows from '@app/components/atoms/Arrows';
import Link from 'next/link';


const Title = styled.h1`
  color: "#000000";
  text-align: center;
  font-size: 25px;
  font-weight: 500;
  letter-spacing: 4px;
  margin: 0;
  text-transform: uppercase;
   display: flex;
   margin: 0 auto;
   font-size: 22px;
 margin-top: 27px;
 margin-bottom: 50px;
`
const ShopCategoryContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  width: 100%;
  margin: 0 auto;
  padding: 22.7px;
  height: auto;
  background-color: #ffe9ec;
`
const SliderCategoryContainer = styled.div`
  .slick-slide {
    & > div {
      margin: 0 10px;
    }

    img {
      width: 150px;
      height: 100px;
    }
  }

  .slick-slider {
    margin-bottom: 70px;
  }

  .slick-dots {
    bottom: -70px;

    li {
      height: auto;
      width: auto;

      &.slick-active {
        button {
          width: 17px;
          border-radius: 3.5px;
          opacity: 1;
        }
      }

      button {
        width: 7px;
        height: 7px;
        border-radius: 50%;
        background-color: ${({ theme }) => theme.color?.black};
        opacity: 0.2294;

        &::before {
          display: none;
        }
      }
    }
  }

  .slick-list {
    margin: 0 -10px;
  }

  .slick-arrow {
    &.slick-prev {
      left: -20px !important;
    }

    &.slick-next {
      right: -20px !important;
    }
    
    &.slick-prev,
    &.slick-next {
      &::before {
        display: none;
      }
    }
  }
`

export const ProductCategory = ({ initialProductCategories } : { initialProductCategories : ProductCategoryData})=> {

  const { productCategories: categories, loading } = useProductCategory(initialProductCategories);

  const slickSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <Arrows className='slick-next' isNext/>,
    prevArrow: <Arrows className='slick-prev' />
  };

    return (
        <ShopCategoryContainer>
            <Title>Shop By Category</Title>
            <RecAndDot/>
            <PageWrapper>
            { loading && <Loader color='green' /> } 
            <SliderCategoryContainer>
            <Slider {...slickSettings}>
              { categories.length > 0 && ( categories.map((category, i)=> {
                  return <Link key={i} href={`products/categories/${category.title.toLowerCase()}`}>
                  <ProductCategoryCard
                          className={`flex flex-col justify-start items-center`} 
                          color={category.color}
                          width='default' 
                          height='default'
                          >
                          <span className='font-bold text-[20px] text-[#393939] uppercase'>{category.title}</span>
                            <span className='text-[#393939] uppercase'>{`${category.products_count } Items`}</span>
                            <Image
                            src={category.featured_image}
                            alt={category.description}
                            width={150}
                            height={100}
                            className='mt-10'/>
                        </ProductCategoryCard>
                  </Link>
                }) )
              }
            </Slider>
                </SliderCategoryContainer>
            </PageWrapper>

   </ShopCategoryContainer>  
    )
}