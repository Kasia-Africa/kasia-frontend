import Image from "next/image"
import styled from "styled-components"
import { useContext } from "react"
import { CartContext } from "@app/hooks/useCarts"

const IconContainer = styled.a`
   display: inline-flex;
   gap: 10px;
   position: relative;
   justify-content: center;
   align-items: center;
`
const OvalContainer = styled.div`
 position: absolute;
 right: -1px;
 top: 0px;
 height: 14px;
 width: 14px;
 border-radius: 50%;
 background-color: ${({ theme }) => theme.color.orange};
 display: flex;
 justify-content: center;
 align-items: center;

 span {
  font-size: 10px;
  line-height: 0;
  color: ${({ theme }) => theme.color.white};
 }
`

export const CartIcon = ()=> {
  const cartCtx = useContext(CartContext)
  const numberOfCartItems = cartCtx.cartProducts && Array.isArray(cartCtx.cartProducts) && cartCtx.cartProducts.reduce((current, item)=> {
    return current + item.product_count
  }, 0)
return (
    <IconContainer href={'/cart'}>
        <div className="relative" >
          <Image
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' fill='none'%3E%3Cpath fill='%23fff' fill-rule='evenodd' d='M31.077 4.411a.923.923 0 0 1 .9 1.126l-2.769 12.308a.923.923 0 0 1-.9.72H9.776l.71 3.077h17.76a.923.923 0 1 1 0 1.846H9.751a.923.923 0 0 1-.899-.715L4.189 2.565H.923a.923.923 0 0 1 0-1.846h4c.43 0 .803.296.9.715l.686 2.977h24.568ZM9.35 16.72h18.22l2.353-10.462H6.936L9.35 16.72ZM10.152 28.103a3.388 3.388 0 0 1 3.385-3.384 3.388 3.388 0 0 1 3.385 3.384 3.388 3.388 0 0 1-3.385 3.385 3.388 3.388 0 0 1-3.385-3.385Zm1.847 0c0 .849.69 1.539 1.538 1.539a1.54 1.54 0 0 0 1.538-1.539 1.54 1.54 0 0 0-1.538-1.538 1.54 1.54 0 0 0-1.539 1.538ZM21.23 28.103a3.388 3.388 0 0 1 3.385-3.384A3.388 3.388 0 0 1 28 28.103a3.388 3.388 0 0 1-3.385 3.385 3.388 3.388 0 0 1-3.384-3.385Zm1.847 0c0 .849.69 1.539 1.538 1.539a1.54 1.54 0 0 0 1.539-1.539 1.54 1.54 0 0 0-1.539-1.538 1.54 1.54 0 0 0-1.538 1.538Z' clip-rule='evenodd'/%3E%3C/svg%3E"
          alt=""
          width={32}
          height={32}
          />
          { 
            <OvalContainer>
                <span>{numberOfCartItems}</span>
            </OvalContainer>
          }
        </div>
          <div>
            <span className="text-white relative text-[14px]">Cart</span>
          </div>
  </IconContainer>
)
}