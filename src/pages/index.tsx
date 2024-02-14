import React from 'react';
import Head from 'next/head';
import { BaseLayout } from '@app/layouts';
import getData from '@app/helpers/getData';
import { HomeCategoryProductsData, ProductCategoryData } from '@app/types';
import HomePage from '@app/components/templates/HomePage';

function App({ productCategoryData, homeCategoryProductsData, featuredBannersData } : { productCategoryData: ProductCategoryData, homeCategoryProductsData : any, featuredBannersData : TFeaturedBannerData }): JSX.Element {
    return (
        <BaseLayout isFullHeight>
            <Head>
                <title>Home - Welcome to Plusity</title>
            </Head>
            <HomePage productCategories={productCategoryData} categoryProducts={homeCategoryProductsData} featuredBanners={featuredBannersData}  />
        </BaseLayout>
    );
}
// App.Layout = BaseLayout;

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