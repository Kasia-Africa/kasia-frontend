import { TProductTesting } from "@app/constant/details";
import { createContext, useCallback, useContext, useEffect, useState } from "react";
import useNotify from "./useNotify";
interface cartContextType {
    cartTotalQty: number;
    cartProducts: TProductTesting[] | null;
    handleAddProductToCart: (product: TProductTesting)=> void;
    handleRemoveProduct: (product:TProductTesting )=> void
}
interface Props{
    [propsName: string]: any
}
export const CartContext = createContext<cartContextType>(
    {
    cartTotalQty: 0,
    cartProducts: [],
     handleAddProductToCart: ()=> {},
     handleRemoveProduct: ()=> {}
        }
    )

export const CartContextProvider = (props: Props)=> {
    const {success} = useNotify()
    const [cartTotalQty, setCartTotalQty] = useState(0)
    const [cartProducts, setCartProducts] = useState<TProductTesting[]>([])
    const handleAddProductToCart = useCallback((product:TProductTesting)=> {
        setCartProducts((prevProducts) => {
            const ProductsArray = Array.isArray(prevProducts) ? prevProducts: []
            setCartTotalQty(product.price * product.product_count)
            return [...ProductsArray, product]
        });
        localStorage.setItem('cartProduct', JSON.stringify([...cartProducts, product]))
    },[])
   const handleRemoveProduct = useCallback((product: TProductTesting)=> {
      if(cartProducts) {
        const filteredProduct = cartProducts.filter((item)=> {
            return item.id === product.id
        })
        setCartProducts(filteredProduct)
        localStorage.removeItem('cartProduct')
        success('product removed succesfully')
      }
   }, [])
     useEffect(()=> {
        const storeCartItems = localStorage.getItem('cartProduct');
        if (storeCartItems) {
            try {
              const cartItemsStored: TProductTesting[] = JSON.parse(storeCartItems);
              setCartProducts(cartItemsStored);
            } catch (error) {
              console.error('Error parsing stored cart items:', error);
            }
          }
      }, [])

    const value= {cartTotalQty, cartProducts, handleAddProductToCart, handleRemoveProduct}
    return <CartContext.Provider value={value} {...props}/>
}
export const useCart = ()=> {
    const context = useContext(CartContext)
    if (!context) {
        throw new Error("context must be used within a provider")
    }
    return context;
}