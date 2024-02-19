import Head from 'next/head'
import CartItems from '@app/components/organisms/CartItems'
import { BaseLayout } from '@app/layouts'
import getData from '@app/helpers/getData'
import { TFeaturedBannerData } from '@app/types'

function ShoppingCartPage({getBannersForEmptyCartPage}: {getBannersForEmptyCartPage: TFeaturedBannerData}) {
    return <>
       <Head>
        <title>Kasia | Cart</title>
       </Head>
       <CartItems EmptyCartBanners = {getBannersForEmptyCartPage}/>
    </>
}
export const getStaticProps = async()=> {
    try {
        const getBannersForEmptyCartPage = await getData(`featured-banners`)
        return {
            props: {getBannersForEmptyCartPage}
        }
    }catch (e) {
        return {props: {}}
    }
}
ShoppingCartPage.Layout = BaseLayout
export default ShoppingCartPage;