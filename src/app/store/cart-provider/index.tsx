import React, {useReducer} from 'react'
import CartContext from '../cart-context'

const CartProvider = ({children}: {children: React.ReactNode})=> {
    const initialCartState = {
        items: [],
        totalAmounts: 0
    }
    const cartReducer = (state: any, actions: any)=> {
        if(actions.type === 'ADD') {
            const updatedItem = state.items.concat(actions.item)
            const updatedTotalAmount = state.totalAmounts + actions.item.price
            return {
                items: updatedItem,
                totalAmounts: updatedTotalAmount
            }
        }
        return initialCartState;
    }
    const[cartState, dispatchAction] = useReducer(cartReducer, initialCartState)
    
    const addItemHandler = (item: any)=> {
        dispatchAction({type: 'ADD' , item: item})
    }
    const removeItemHandler = (id: any)=> {
        dispatchAction({type: 'REMOVE', id:id})
    }
    const cartContext: any = {
         items: cartState.items,
         totalAmounts: cartState.totalAmounts,
         addItems: addItemHandler,
         removeItems: removeItemHandler,
    };
    return <CartContext.Provider value={cartContext}>
             {children}
    </CartContext.Provider>
}
export default CartProvider;