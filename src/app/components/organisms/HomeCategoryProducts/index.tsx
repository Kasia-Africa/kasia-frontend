import Link from 'next/link'
import React from 'react'
import styled from 'styled-components'
import AddToCartButton from "@app/components/atoms/AddToCartButton";
import { useCategoryProducts } from '@app/hooks/useProductCategory';
import { RecAndDot } from '@app/components/atoms/rectangleAndDot'
import { HomeCategoryProduct, HomeCategoryProductsData, TProduct} from '@app/types'
import Loader from '@app/components/atoms/Loader';
import { Spacer } from '@app/components/atoms/Spacer';
import { ImageContainer, PageWrapper } from '@app/components/ui/PageElement';
import Arrows from '@app/components/atoms/Arrows';
import { format_price } from "@app/utils/helper";
import Slider from "react-slick";
import Image from 'next/image';
import { LikeButton } from '@app/components/atoms/like';
import ShopCard from '@app/components/atoms/ProductCategoryCard'
import { Title } from '@app/components/atoms/Title';

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
position: relative;
`;

const ItemsContainer = styled.div`
width: 100%;
margin: 0 auto;
padding: 22.33px;
`;

const ViewAllStyle = styled.a`
font-size: 18px;
font-weight: 400;
line-height: normal;
text-transform: uppercase;
position: absolute;
right: 0;
top: calc(50% - 9px);
`;

const ViewAllLink = ({ url } : { url : string} )=> {
  return (
      <ViewAllStyle href={url}>
          View All
      </ViewAllStyle>
  )
}

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
      <PageWrapper>
        <ItemsContainer>
          { loading && <Loader color='green' /> } 
            {product_categories && product_categories.data.map((category : HomeCategoryProduct, index : number) => {
                  return (
                    <div key={index}>
                    <Header>
                    <Title>{category.name}</Title>
                      <RecAndDot/>
                      <ViewAllLink url={`/products/categories/${category.slug}`} />
                    </Header>
                    <Spacer height={80}/>
                      <PageWrapper key={index}>
                      <ProductCategory>
                      <Slider {...slickSettings}>
                        { category.data.map((product : TProduct , i : number)=> {
                          return <Link key={i} href={`/products/${product.slug}`} title={product.title} className='product-title relative'>
                            <ShopCard
                          key={product.slug}
                          color="white"
                          className='flex flex-col justify-center items-center cursor-pointer gap-1'
                          width='shop' height='shop'>
                            <LikeButton/>
                                  <ImageContainer>
                            <Image
                            src={product.featured_image}
                            alt={product.slug}
                            width={189}
                            height={127}
                            />
                              </ImageContainer>
                              <Spacer height={17}/>
                          <h2 className='font-bold text-[16px] text-[#393939]'>{product.title}</h2>
                          <Spacer/>
                            <span className='text-[#393939]'>{format_price(product.price)}</span>
                            <Spacer/>
                            <AddToCartButton>Add to cart</AddToCartButton>
                            <Spacer/>
                      </ShopCard>
                          </Link>
                        

                      })
                    }
                    </Slider>
                        </ProductCategory>
                    </PageWrapper>
                    <Spacer height={50}/>
                    </div>
                  )
            })}
        </ItemsContainer>
      </PageWrapper>
  )
}