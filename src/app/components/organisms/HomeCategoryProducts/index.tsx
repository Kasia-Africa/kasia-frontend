import Link from 'next/link'
import React from 'react'
import styled from 'styled-components'
import AddToCartButton from "@app/components/atoms/AddToCartButton";
import { useCategoryProducts } from '@app/hooks/useProductCategory';
import { RecAndDot } from '@app/components/atoms/rectangleAndDot'
import { HomeCategoryProduct, HomeCategoryProductsData, TProduct} from '@app/types'
import Loader from '@app/components/atoms/Loader';
import { Spacer } from '@app/components/atoms/Spacer';
import { PageWrapper } from '@app/components/ui/PageElement';
import Arrows from '@app/components/atoms/Arrows';
import { format_price } from "@app/utils/helper";
import Slider from "react-slick";
import Image from 'next/image';
import { LikeButton } from '@app/components/atoms/like';
import ShopCard from '@app/components/atoms/ProductCategoryCard'

const ProductImage = styled.div`
width: 189px;
height: 127px;
`
const LikeButtonContainer = styled.div`
position: absolute;
top: 23px;
left: 98px;
`
const ProductCategory = styled.div`
 width: 100%;
 margin-top:5px;

 h2.product-title {
  font-weight: 500;
 }

 .slick-slide {
  & > div {
    margin: 0 10px;
  }
}

.slick-slider {
  margin-bottom: 20px;
}

.slick-list {
  margin: 0 -10px;
}

.slick-arrow {
  &.slick-prev {
    left: -20px;
  }

  &.slick-next {
    right: -20px;
  }
  &.slick-prev,
  &.slick-next {
    &::before {
      display: none;
    }
  }
}
`
const Header = styled.div`
display: flex;
flex-direction: column;
`
const Title = styled.h1`
color: "#000000";
text-align: center;
font-size: 25px;
font-weight: 500;
letter-spacing: 4px;
padding-top: 19px;
text-transform: uppercase;
`;
const ItemsContainer = styled.div`
background: #F2F2F2;
width: 1223px;
margin: 0 auto;
padding: 0 22.33px;
margin-top: 40px;
padding-top: 30px;
display: flex;
flex-direction: column;
`
export const HomeCategoryProducts = ({ initialCategoryProducts } : { initialCategoryProducts : HomeCategoryProductsData, } ) => {
  const { categoryProducts: product_categories, loading } = useCategoryProducts(initialCategoryProducts);
  const slickSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    nextArrow: <Arrows className='slick-next' isNext/>,
    prevArrow: <Arrows className='slick-prev' />
  };
  return (
      <ItemsContainer>
        { loading && <Loader color='green' /> } 
          {product_categories && product_categories.data.map((category : HomeCategoryProduct, index : number) => {
                return (
                  <>
                  <Header>
                  <Title>{category.name}</Title>
                    <RecAndDot/>
                  </Header>
                  <Spacer/>
                    <Link href={`/products/categories/${category.slug}`}>
                      <p className='text-[20px] uppercase text-right relative bottom-[50px]'>View All</p>
                    </Link>
                    <PageWrapper key={index}>
                    <ProductCategory>
                    <Slider {...slickSettings}>
                      { category.data.map((product : TProduct , i : number)=> {
                        return <Link key={i} href={`/products/${product.slug}`} title={product.title} className='relative'>
                          <ShopCard
                        key={product.slug}
                        color="white"
                        className='flex flex-col justify-center items-center gap-2 cursor-pointer'
                        width='shop' height='shop'>
                          <LikeButtonContainer>
                          <LikeButton/>
                          </LikeButtonContainer>
                                <ProductImage>
                                <Image
                          src={product.featured_image}
                          alt={product.slug}
                          width={189}
                          height={127}
                          />
                            </ProductImage>
                            <Spacer/>
                        <h2 className='product-title text-[20px] text-[#393939]'>{product.title}</h2>
                          <span className='text-[#393939]'>{format_price(product.price)}</span>
                          <Spacer height = {5}/>
                          <AddToCartButton>Add to cart</AddToCartButton>
                    </ShopCard>
                        </Link>
                      

                    })
                  }
                  </Slider>
       </ProductCategory>
                  </PageWrapper>
                  </>
                )
          })}
      </ItemsContainer>
  )
}