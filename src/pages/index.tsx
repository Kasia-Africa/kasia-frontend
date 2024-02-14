import React from 'react';
import Head from 'next/head';
import { BaseLayout } from '@app/layouts';
import getData from '@app/helpers/getData';
<<<<<<< HEAD
import { HomeCategoryProductsData, ProductCategoryData } from '@app/types';
import HomePage from '@app/components/templates/HomePage';

function App({ productCategoryData, homeCategoryProductsData } : { productCategoryData: ProductCategoryData, homeCategoryProductsData : HomeCategoryProductsData }): JSX.Element {
=======
import { ProductCategoryData, TFeaturedBannerData } from '@app/types';
import HomePage from '@app/components/templates/HomePage';

function App({ productCategoryData, homeCategoryProductsData, featuredBannersData } : { productCategoryData: ProductCategoryData, homeCategoryProductsData : any, featuredBannersData : TFeaturedBannerData }): JSX.Element {
>>>>>>> 12f65f6 (refactor home page banner)
    return (
        <>
            <Head>
                <title>Home - Welcome to Plusity</title>
            </Head>
            <HomePage productCategories={productCategoryData} categoryProducts={homeCategoryProductsData} featuredBanners={featuredBannersData}  />
        </>
    );
}
App.Layout = BaseLayout;

export const getStaticProps = async () => {
    try {
        const productCategoryData = await getData(`products/categories`);
        const homeCategoryProductsData = await getData(`categories/products/home`);
        const featuredBannersData = await getData(`featured-banners`);

        return {
            props : { productCategoryData, homeCategoryProductsData, featuredBannersData }
        }


    } catch (e) {
        return { props: {} };
      }
}

export default App;