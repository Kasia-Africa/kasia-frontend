import { Separator } from '@app/components/atoms/Separator';
import { Spacer } from '@app/components/atoms/Spacer';
import { RecAndDot } from "@app/components/atoms/rectangleAndDot";
import Image from "next/image";
import React from "react";
import styled from "styled-components"
const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  top: 70px;
  margin: 0 auto;
  background: #F2F2F2;
  margin-bottom: 20px;
`
const Header = styled.div`
display: flex;
flex-direction: column;
width: 100%;
`
const HeaderTitle = styled.div`
   display: flex;
   margin: auto auto;
   font-size: 22px;
`;
const CartContainer = styled.div`
display: flex;
margin: 0 auto;
width: 1223px;
`
const CartProduct = styled.div`
flex: 1;
`;
const CartQuantity = styled.div`
flex: 1;
`
const CartPrice = styled.div`
flex: 1;
`
const RecAndDotContainer = styled.div`
  position: relative;
  top: 10px;
`
 const CartItems = ()=> {
  // const pathname = usePathname()
   return (
              <Container>
                <Header>
                  <HeaderTitle>
              <strong className="font-extrabold ml-2">SHOPPING CART</strong>
                  </HeaderTitle>
                  <RecAndDotContainer>
                    <RecAndDot/>
                  </RecAndDotContainer>
                  <Image
                    src='/fruits.svg'
                    width={1220}
                    height={275}
                    alt=''
                    className='mx-auto mt-9 mb-9'
                  />
                </Header>
                <Spacer/>
                <Separator className='relative top-10 w-[1223px] m-auto'/>
                <CartContainer>
                    <CartProduct>
                        <>PRODUCT</>
                        <Spacer height={40}/>
                        </CartProduct>
                    <CartQuantity>
                        <> QUANTITY</>
                        </CartQuantity>
                    <CartPrice><>TOTAL PRICE</></CartPrice>
                </CartContainer>
              </Container>
            )}
export default CartItems;