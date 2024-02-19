'use client'
import useSWR from 'swr';
import getData from '@app/helpers/getData';
import { TFeaturedBannerData } from '@app/types';


export function useFeaturedBanner (
    banners ?: TFeaturedBannerData
) {
    // @ts-ignore
    const { data: featuredBanners, isValidating: loading } = useSWR<TFeaturedBannerData>('featured-banners', 
    ()=> getData('featured-banners'), {
        initialData : banners
    } );

    return {
        featuredBanners: featuredBanners?.banners || [],
        loading,
      };
}