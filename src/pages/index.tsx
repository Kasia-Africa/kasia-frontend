import React from 'react';
import Head from 'next/head';
import { BaseLayout } from '@app/layouts';
import getData from '@app/helpers/getData';
import { HomeCategoryProductsData, ProductCategoryData } from '@app/types';
import HomePage from '@app/components/templates/HomePage';

function App({ productCategoryData, homeCategoryProductsData } : { productCategoryData: ProductCategoryData, homeCategoryProductsData : HomeCategoryProductsData }): JSX.Element {
    return (
        <>
            <Head>
                <title>Home - Welcome to Plusity</title>
            </Head>
            { productCategoryData && homeCategoryProductsData && <HomePage productCategories={productCategoryData} categoryProducts={homeCategoryProductsData} /> }
        </>
    );
}
App.Layout = BaseLayout;

export const getStaticProps = async () => {
    try {
        const productCategoryData = await getData(`products/categories`);
        const homeCategoryProductsData = await getData(`categories/products/home`);

        return {
            props : { productCategoryData, homeCategoryProductsData }
        }


    } catch (e) {
        return { props: {} };
      }
}

export default App;