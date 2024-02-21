import { TProductTesting } from "@app/constant/details";
import { createContext, useCallback, useContext, useEffect, useState } from "react";
interface cartContextType {
    cartTotalQty: number;
    totalProductCount: number;
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
    totalProductCount: 0,
    cartProducts: [],
     handleAddProductToCart: ()=> {},
     handleRemoveProduct: ()=> {}
        }
    )

export const CartContextProvider = (props: Props)=> {
    const [cartTotalQty, setCartTotalQty] = useState(0)
    const [totalProductCount, setTotalProductCount] = useState(0)
    const [cartProducts, setCartProducts] = useState<TProductTesting[]>([])
    const handleAddProductToCart = useCallback((product:TProductTesting)=> {
        setCartProducts((prevProducts) => {
            const ProductsArray = Array.isArray(prevProducts) ? prevProducts: []
            setCartTotalQty(product.price * product.product_count)
            return [...ProductsArray, product]
        });
        localStorage.setItem('cartProduct', JSON.stringify([...cartProducts, product]))
    },[cartProducts])
   const handleRemoveProduct = useCallback((product: TProductTesting)=> {
      if(cartProducts) {
        const filteredProduct = cartProducts.filter((item)=> {
            return item.id !== product.id
        })
        setCartProducts(filteredProduct)
        localStorage.setItem('cartProduct', JSON.stringify(filteredProduct));
      }
   }, [cartProducts])
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
      

      useEffect(()=> {
        const getTotal = ()=> {
            if(cartProducts) {
                const {totalCartProduct, totalProductCount} = cartProducts.reduce((accumulator, item)=> {
                    const SubTotal = item.price * item.product_count
                    accumulator.totalCartProduct += SubTotal
                    accumulator.totalProductCount += item.product_count
                    return accumulator;
                }, 
              {  totalCartProduct: 0,
                totalProductCount: 0}
                )
                setCartTotalQty(totalCartProduct)
                setTotalProductCount(totalProductCount)
            }
        }
        getTotal()
      }, [cartProducts])
    const value= {cartTotalQty, totalProductCount, cartProducts, handleAddProductToCart, handleRemoveProduct}
    return <CartContext.Provider value={value} {...props}/>
}
export const useCart = ()=> {
    const context = useContext(CartContext)
    if (!context) {
        throw new Error("context must be used within a provider")
    }
    return context;
}