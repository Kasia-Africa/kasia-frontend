"use client"

import AddToCartButton from '@app/components/atoms/AddToCartButton';
import { Spacer } from '@app/components/atoms/Spacer';
import ShopCard from '@app/components/atoms/ProductCategoryCard'
import { LikeButton } from "@app/components/atoms/like";
import { RecAndDot } from "@app/components/atoms/rectangleAndDot";
import { TProductResponse } from "@app/constant/constant";
import Image from "next/image";
import Link from 'next/link';
import { format_price } from "@app/utils/helper";
import { usePathname } from "next/navigation";
import React from "react";
import styled from "styled-components"
import { PageWrapper } from '@app/components/ui/PageElement';
import { Title } from '@app/components/ui/auth.styles';

const LikeButtonContainer = styled.div`
position: absolute;
top: 23px;
left: 90px;
`
const ProductImage = styled.div`
width: 109px;
height: 107px;
margin: 0 auto;
`
const AllCategory = styled.div`
display: grid;
grid-template-columns: repeat(5, 1fr);
margin-bottom: 40px;
width: 100%;
gap: 16px;
`
const Header = styled.div`
display: flex;
flex-direction: column;
width: 100%;

  .featured-banner {
    width: 100%;
  }
`

export const SingleProductCategory = ({allSingleProducts} : {allSingleProducts: TProductResponse[]})=> {
  const pathname = usePathname()
   return (
    <>
    {
      allSingleProducts.map((category, index)=> {
        return (
          <div key={index}>
            {pathname === `/products/categories/${category.slug}` && (
              <PageWrapper className='mt-16 mb-16'>
                <Header>
                  <Title>
                    ALL CATEGORIES {'>'}  <span className="font-extrabold ml-2 uppercase">{category.name}</span>
                  </Title>
                  <RecAndDot />
                  <Image
                    src='/fruits.svg'
                    width={1220}
                    height={275}
                    alt=''
                    className='mt-9 mb-9 featured-banner'
                  />
                </Header>
            <AllCategory>
         {
                    category.data?.map((product: any, i: any)=> {
                      return <Link key={i} href={`/products/${product.link}`} className='relative'>
                          <ShopCard
                          color="white"
                          className='flex flex-col justify-center items-center cursor-pointer mb-4'
                          width='shop' height='shop'
                        >
                          <LikeButtonContainer>
                            <LikeButton/>
                          </LikeButtonContainer>
                          <ProductImage>
                              <Image
                                src={product.src}
                                alt={product.alt}
                                width={109}
                                height={107}
                              />
                          </ProductImage>
                          <Spacer height={5}/>
                          <span className='font-bold text-[20px] text-[#393939]'>{product.name}</span>
                          <span className='text-[#393939]'>{format_price(product.price)}</span>
                          <Spacer/>
                          <AddToCartButton>Add to cart</AddToCartButton>
                        </ ShopCard>
                        </Link>
                    })
                  }
                  </AllCategory>
              </PageWrapper>
            )}
          </div>
        );
      })
    }
    </>
  );
};