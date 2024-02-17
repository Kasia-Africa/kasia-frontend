import Head from 'next/head'
import CartItems from '@app/components/organisms/cart_items'
import { BaseLayout } from '@app/layouts'

function CartPage () {
    return <>
       <Head>
        <title>Kasia | Shopping Cart</title>
       </Head>
       <BaseLayout bg="#ffffff">
        <CartItems />
       </BaseLayout>
       
    </>
}

export default CartPage;