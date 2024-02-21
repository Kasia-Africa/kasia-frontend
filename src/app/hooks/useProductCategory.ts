'use client'
import useSWR from 'swr';
import getData from '@app/helpers/getData';
import { HomeCategoryProductsData, ProductCategoryData} from '@app/types';


export function useProductCategory(
    categories?: ProductCategoryData
) {
    // @ts-ignore
    const { data: productCategories, isValidating: loading } = useSWR<ProductCategoryData>('products/categories', getData, {
        initialData: categories
    } );

    return {
        productCategories: productCategories?.product_categories || [],
        loading,
      };
}

export function useCategoryProducts(
    categories_products?: HomeCategoryProductsData
) {
    // @ts-ignore
    const { data: categoryProducts, isValidating: loading } = useSWR<HomeCategoryProductsData>('categories/products/home', getData, {
        initialData: categories_products
    } );

    return {
        categoryProducts,
        loading,
      };
}
