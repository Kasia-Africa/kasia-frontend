import Head from 'next/head'
import ProductsDetails from '@app/components/organisms/product_details'
import { BaseLayout } from '@app/layouts'
import { usePathname } from 'next/navigation'
import {kasia } from '@app/constant/constant'
import { TestData } from '@app/constant/details'
function ProductDetailsPage () {
    const pathname = usePathname()
    const pageTitle = pathname ? `Kasia | ${pathname.split('/').pop()}` : 'Kasia';
    // const mappedCartData = kasia.map((datas) => datas.data)
    return (
        <>
        <Head>
        <title>{pageTitle}</title>
        </Head>
            <ProductsDetails productsInformation = {kasia} cartDataCat = {TestData}/>
        </>
    )
}
ProductDetailsPage.Layout = BaseLayout
export default ProductDetailsPage;