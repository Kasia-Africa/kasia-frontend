"use client"
import React from 'react';
import Head from 'next/head';
import { BaseLayout} from '@app/layouts';
import { SingleProductCategory} from '@app/components/organisms/Single_Product_Category';
import {kasia} from '@app/constant/constant';
function AllSingleProductsPage(): JSX.Element{
    return (
        <>
            <Head>
                <title>Kasia | category</title>
            </Head>
          <SingleProductCategory allSingleProducts = {kasia} />
        </>
    );
}

AllSingleProductsPage.Layout = BaseLayout;
export default AllSingleProductsPage;