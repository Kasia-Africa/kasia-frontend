import React from 'react';
import styled from 'styled-components';
import {HomeCategoryProducts } from '@app/components/organisms/HomeCategoryProducts';
import { ProductCategory } from '@app/components/organisms/ProductCategory';
import { ShoppingHeaderImage } from '@app/components/organisms/shop-image';
import { HomeCategoryProductsData, ProductCategoryData, TFeaturedBannerData } from '@app/types';


const HomeContainer = styled.div`
    width: 100%;
    margin: 0 auto;
    position: relative;
    top: 0;
    padding: 0;
    height: 2300px;
`
const HomePage =  ({ productCategories, categoryProducts, featuredBanners } : { productCategories: ProductCategoryData, categoryProducts : HomeCategoryProductsData, featuredBanners : TFeaturedBannerData }) => {
    return (
        <>
        { featuredBanners && <ShoppingHeaderImage initialFeaturedBanners={featuredBanners} /> }
        <HomeContainer>
            { productCategories && <ProductCategory initialProductCategories={productCategories}/>}
            { categoryProducts && <HomeCategoryProducts initialCategoryProducts={categoryProducts}/>}
        </HomeContainer>
        </>         
    );
};


export default HomePage;