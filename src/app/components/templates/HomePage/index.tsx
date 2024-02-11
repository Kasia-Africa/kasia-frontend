import React from 'react';
import styled from 'styled-components';
import {HomeCategoryProducts } from '@app/components/organisms/HomeCategoryProducts';
import { ProductCategory } from '@app/components/organisms/ProductCategory';
import { ShoppingHeaderImage } from '@app/components/organisms/shop-image';
import { HomeCategoryProductsData, ProductCategoryData } from '@app/types';
import Loader from '@app/components/atoms/Loader';


const HomeContainer = styled.div`
    width: 100%;
    margin: 0 auto;
    position: relative;
    top: 250px;
    padding: 0;
    height: 2300px;
`
const HomePage =  ({ productCategories, categoryProducts } : { productCategories: ProductCategoryData, categoryProducts : HomeCategoryProductsData }) => {
    let renderedContent;
    try {
        renderedContent = (
            <>
                <ShoppingHeaderImage />
                <HomeContainer>
                    {productCategories && <ProductCategory initialProductCategories={productCategories} />}
                    {categoryProducts.data.length > 0  && <HomeCategoryProducts initialCategoryProducts={categoryProducts} />}
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