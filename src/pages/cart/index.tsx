import Head from 'next/head'
import CartItems from '@app/components/organisms/cart_items'
import { BaseLayout } from '@app/layouts'

function ShoppingCartPage() {
    return <>
       <Head>
        <title>Kasia | Cart</title>
       </Head>
       <CartItems/>
    </>
}
ShoppingCartPage.Layout = BaseLayout
export default ShoppingCartPage;