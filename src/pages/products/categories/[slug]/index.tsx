"use client"
import React from 'react';
import Head from 'next/head';
import { BaseLayout} from '@app/layouts';
import { SingleProductCategory} from '@app/components/organisms/SingleProductCategory';
import getData from '@app/helpers/getData';
import {SingleProductCategoryData } from '@app/types';
function AllSingleProductsPage({getAllSingleProductCategory}: {getAllSingleProductCategory: SingleProductCategoryData}): JSX.Element{
    return (
        <>
            <Head>
                <title>Kasia | category</title>
            </Head>
          <SingleProductCategory allSingleProducts = {getAllSingleProductCategory}/>
        </>
    );
}

export const getStaticProps =async()=> {
try {
    const getAllSingleProductCategory = getData('products/categories')
    return {
        props: {getAllSingleProductCategory}
    }
}
catch (e) {
 return {props:{}}
}
}
export const getStaticPaths = async () => {
    try {
        const categories = await getData<SingleProductCategoryData>('products/categories');
        const paths = categories.product_categories.map(category => ({
            params: { slug: category.slug }
        }));

        return {
            paths,
            fallback: 'blocking'
        }
    } catch (error) {
        console.error('Error fetching categories:', error);
        return {  };
    }
};

AllSingleProductsPage.Layout = BaseLayout;
export default AllSingleProductsPage;