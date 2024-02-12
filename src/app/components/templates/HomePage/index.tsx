import React from 'react';
import styled from 'styled-components';
import {HomeCategoryProducts } from '@app/components/organisms/HomeCategoryProducts';
import { ProductCategory } from '@app/components/organisms/ProductCategory';
import { ShoppingHeaderImage } from '@app/components/organisms/shop-image';
import { HomeCategoryProductsData, ProductCategoryData } from '@app/types';


const HomeContainer = styled.div`
    width: 100%;
    margin: 0 auto;
    position: relative;
    top: 250px;
    padding: 0;
    height: 2300px;
`
const HomePage =  ({ productCategories, categoryProducts } : { productCategories: ProductCategoryData, categoryProducts : HomeCategoryProductsData }) => {
    return (
        <>
        <ShoppingHeaderImage/>
        <HomeContainer>
            { productCategories && <ProductCategory initialProductCategories={productCategories}/>}
            {categoryProducts?.data.length > 0 && <HomeCategoryProducts initialCategoryProducts={categoryProducts}/>}
        </HomeContainer>
        </>         
    );
};


export default HomePage;