'use client'
import useSWR from 'swr';
import getData from '@app/helpers/getData';
import { TFeaturedBannerData } from '@app/types';


export function useFeaturedBanner () {
    // @ts-ignore
    const { data: bannerDetails, isValidating: loading } = useSWR<TFeaturedBannerData>('featured-banners', getData, {} );

    return {
        bannerDetails: bannerDetails?.banners || [],
        loading,
      };
}