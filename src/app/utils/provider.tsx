"use client"

import { CartContextProvider } from "@app/hooks/useCarts";

interface CartProviderProps {
    children: React.ReactNode;
}
export const CartProvider: React.FC<CartProviderProps> = ({children})=> {
return (
<CartContextProvider>
    {children}
</CartContextProvider>
)
}