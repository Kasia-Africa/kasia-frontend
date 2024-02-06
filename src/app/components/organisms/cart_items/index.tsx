"use client"
import { Separator } from '@app/components/atoms/Separator';
import { Spacer } from '@app/components/atoms/Spacer';
import { RecAndDot } from "@app/components/atoms/rectangleAndDot";
import { ImageContainer, PageWrapper } from '@app/components/ui/PageElement';
import { useCart } from '@app/hooks/useCarts';
import Image from "next/image";
import Link from 'next/link';
import React from "react";
import { MdArrowBack } from 'react-icons/md';
import styled from "styled-components"
import CartContent from '../cartContent';
import { LikeButton } from '@app/components/atoms/like';
import { format_price } from '@app/utils/helper';
import { Button } from '@app/components/atoms/Buttons';
import { TProductTesting } from '@app/constant/details';
import toast from 'react-hot-toast';
import ProductCategoryCard from '@app/components/atoms/ProductCategoryCard';
import AddToCartButton from '@app/components/atoms/AddToCartButton';

const Container = styled.div`
 margin: 0 auto;
 display: flex;
 flex-direction: column;
`
const Title = styled.div`
font-size: 22px;
margin: 0 auto;
margin-top: 27px;
font-weight: 700;
`

export const CartGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 2rem;
  font-size: 0.75rem;
  padding-bottom: 1rem;
  align-items: center;

  & > div {
    &:first-child {
      justify-self: start;
    }

    &:nth-child(2) {
      justify-self: center;
    }

    &:last-child {
      justify-self: end;
    }
  }
`;
const CartRemoveAndLikeContainer = styled.div`
 position: relative;
 left: 70%;
 bottom:12px;
`
const CheckoutSection = styled.div`
display: flex;
position: absolute;
// justify-content: space-between;
`;
const Price = styled.span`
color: #FE9F09;
font-family: Poppins;
font-size: 15.167px;
font-style: normal;
font-weight: 500;
line-height: normal;
`;
const SavedProductContainer = styled.div`
display: flex;
flex-direction: column;
gap: 22px;
width: 1223px;
margin: 0 auto;
`
const SavedProduct = styled.div`
display: flex;
gap: 22.7px;
margin: 0 auto;
margin-top: 5px;
width: 1428.917px;
height: 260px;
flex-shrink: 0;
// width: 100%;
`;
const SavedTitle = styled.div`
color: #000;
font-family: Poppins;
font-size: 29px;
font-style: normal;
font-weight: 600;
line-height: normal;
letter-spacing: 1.1px;
margin-top: 20px;
`
const TotalItems = styled.div`
position: absolute;
font-weight: 700;
font-size: 17px;
top: 1rem;
`
const SubTotal = styled.div`
text-align: center;
display: flex;
justify-content: center;
position: relative;
font-weight: 700;
font-size: 17px;
top: 1rem;
left: 30em;
// top: 25px;
width: 100%;
`
const Checkout = styled.div`
position: absolute;
left: 60em                                                ;
`
const GetYourGroceries = styled.div`
width: 1489px;
margin: auto auto;
height: 269px;
flex-shrink: 0;
border-radius: 14.516px;
background: linear-gradient(165deg, #FFF130 -8.53%, #FFDB21 85.65%);
position: relative;
margin-top:30px;
// display: flex;
// justify-content: center;
`;
const GetYourGroceriesText = styled.div`
width: 340px;
height: 109.718px;
flex-shrink: 0;
margin: 40.9px 823px 111px 319px;
font-weight: 600;
position: absolute;
font-size: 15px;
`
const GroceriesButton = styled.button`
margin: 178px 953px 43.4px 317px;
width: 203.631px;
height: 47.254px;
flex-shrink: 0;
border-radius: 12.097px;
background: #39B54A;
text-transform: uppercase;
color: #fff;
font-size: 14px;
font-weight: 500;
padding: 18.7px 14.11px 18.12px 24.75px;
`;
const notify = () => toast('product Removed',  {
  duration: 4000,
  position: 'top-center'});
 const CartItems = ()=> {
  const {cartProducts, cartTotalQty, handleRemoveProduct} = useCart()
  const removeProduct = (product: TProductTesting)=> {
    notify()
    handleRemoveProduct(product)
  }
  if(!cartProducts || cartProducts.length === 0) {
    return (
    <div className='flex flex-col items-center justify-center mt-28'>
            <div className='text-2xl '>Your cart is empty</div>
            <div>
              <Link href={'/'} className='text-green-500 flex items-center gap-1 mt-2'>
                <MdArrowBack/>
                  <span>Start Shopping</span>
              </Link>
            </div>
    </div>
    )
  }
  return ( <Container>
            <Title>SHOPPING CART</Title>
            <RecAndDot/>
            <Image
                    src='/fruits.svg'
                    width={1220}
                    height={275}
                    alt=''
                    className='mx-auto mt-28 mb-9'
                  />
                  <PageWrapper>
                      <CartGrid>
                    <div>Product</div>
                    <div>Quantity</div>
                    <div>Total Price</div>
                </CartGrid>
                <Separator className='relative mb-14 m-auto w-[1200px]'/>
                <div className=''>
                  {
                    cartProducts && cartProducts.map((item)=> {
                      return <div className='pb-7 box-border'>
                        <CartContent item= {item} key={item.id} />
                        <CartRemoveAndLikeContainer >
                        <Image 
                        src={"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='26' fill='none'%3E%3Cpath fill='%23EB5757' fill-rule='evenodd' d='m13.438.4 1.374 1.4h4.813v2.8H.375V1.8h4.813L6.563.4h6.875ZM1.75 22.8c0 1.54 1.237 2.8 2.75 2.8h11c1.512 0 2.75-1.26 2.75-2.8V6H1.75v16.8Zm2.75-14h11v14h-11v-14Z' clip-rule='evenodd'/%3E%3C/svg%3E"}
                        alt=''
                        width={20}
                        height={26}
                        className='relative left-24 cursor-pointer bottom-12'
                        onClick={()=> removeProduct(item)}
                        />
                        <div className='relative bottom-20'>
                        <LikeButton/>
                        </div>
                            </CartRemoveAndLikeContainer>
                       <Separator/>

                       </div>
                    })
                  }
                </div>
                  <CheckoutSection>
                      <TotalItems>{cartProducts[0].product_count} Items</TotalItems>
                      <SubTotal>Subtotal: {format_price(cartTotalQty)}</SubTotal>
                      <Checkout>
                      <Button kind='secondary'
                                 type="submit" 
                                 padding="xxs"
                                 className="text-white w-[140px] uppercase shadow-sm" 
                                 ><span className="text-[10px]">CHECK OUT</span>
                      </Button>
                      </Checkout>
                     </CheckoutSection>
                     <PageWrapper>
                     <SavedProductContainer>
                     <Spacer height={25}/>
                           <SavedTitle>SAVED PRODUCT</SavedTitle>
                           <Spacer/>
                           <SavedProduct>
                              { cartProducts.map((saved, index)=> {
                                    return <>
                                        {
                                          index < 5 &&  <ProductCategoryCard
                                          key={index}
                                          color="white"
                                          className='flex flex-col justify-center items-center cursor-pointer'
                                          width='shop' height='shop'>
                                            <LikeButton/>
                                                  <ImageContainer>
                                                  <Image
                                            src={saved.featured_image}
                                            alt={saved.title}
                                            width={140}
                                            height={140}
                                            />
                                                  </ImageContainer>
                                          <span className='font-bold text-[16px] text-[#393939]'>{saved.title}</span>
                                          <Spacer/>
                                            <Price className='text-[#393939]'>{format_price(saved.price)}</Price>
                                            <Spacer/>
                                            <AddToCartButton>Add To Cart</AddToCartButton>
                                            <Spacer/>
                                      </ProductCategoryCard>
                                        }
                                    </>
                                 })
                              }
                  </SavedProduct>
                        </SavedProductContainer>
                        </PageWrapper>
                </PageWrapper>
                <GetYourGroceries>
            <GetYourGroceriesText>
               <h1 className="text-[#333] w-full">Get your <span className="text-[#FFF]">Groceries</span> delivered to your <span className="text-[#FFF]">doorstep</span>
               </h1>
            </GetYourGroceriesText>
            <GroceriesButton>
            all products on sale
          </GroceriesButton>
          <Image
          src={'/freshfood.png'}
          alt=""
          width={287}
          height={269}
          className="ml-[893px] mr-[294px] absolute bottom-0"
          />
          </GetYourGroceries>
    </Container>
   )
  }
  
             
export default CartItems;
