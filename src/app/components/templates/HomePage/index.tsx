import React from 'react';
import styled from 'styled-components';
import {HomeCategoryProducts } from '@app/components/organisms/HomeCategoryProducts';
import { ProductCategory } from '@app/components/organisms/ProductCategory';
import { ShoppingHeaderImage } from '@app/components/organisms/shop-image';
import { HomeCategoryProductsData, ProductCategoryData, TFeaturedBannerData } from '@app/types';
import Loader from '@app/components/atoms/Loader';


const HomeContainer = styled.div`
    width: 100%;
    margin: 0 auto;
    padding: 0;
`

const HomePage =  ({ productCategories, categoryProducts, featuredBanners } : { productCategories: ProductCategoryData, categoryProducts : HomeCategoryProductsData ,  featuredBanners : TFeaturedBannerData}) => {
    let renderedContent;
    try {
        renderedContent = (
            <>
            { featuredBanners && <ShoppingHeaderImage initialFeaturedBanners={featuredBanners} /> }
        <HomeContainer>
            { productCategories && <ProductCategory initialProductCategories={productCategories}/>}
            { categoryProducts && <HomeCategoryProducts initialCategoryProducts={categoryProducts}/>}
        </HomeContainer>
            </>
        );
    } catch (error:any) {
        console.error('Error occurred in HomePage:', error);
        renderedContent = <Loader color='green' height={300}/>
    }
    return renderedContent;
};


export default HomePage;