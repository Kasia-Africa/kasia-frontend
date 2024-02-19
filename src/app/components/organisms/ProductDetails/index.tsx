"use client"
import AddToCartButton from "@app/components/atoms/AddToCartButton";
import { Button } from "@app/components/atoms/Buttons";
import ProductCategoryCard from "@app/components/atoms/ProductCategoryCard";
import Quantity from "@app/components/atoms/Quantity";
import { Separator } from "@app/components/atoms/Separator";
import { Spacer } from "@app/components/atoms/Spacer";
import TextArea from "@app/components/atoms/TextArea";
import { LikeButton } from "@app/components/atoms/like";
import { RecAndDot } from "@app/components/atoms/rectangleAndDot";
import { TProductResponse } from "@app/constant/constant";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styled from "styled-components";
import { Rating } from "@mui/material";
import { useCallback, useEffect, useState } from "react";
import { format_price } from "@app/utils/helper";
import { ImageContainer, PageWrapper } from "@app/components/ui/PageElement";
import { TProduct } from "@app/types";
import { useCart } from "@app/hooks/useCarts";
import { TProductTesting } from "@app/constant/details";
import { MdCheckCircle } from "react-icons/md";
import { useRouter } from "next/router";
import useNotify from "@app/hooks/useNotify";
const Container =  styled.div `
display: flex;
flex-direction: column;
margin: 0 auto;
background-color: #F2F2F2;
`;
const HeaderTitle = styled.div`
   display: flex;
   margin: 0 auto;
   font-size: 22px;
 margin-top: 27px;
 margin-bottom: 90px;
`;
const DetailCard = styled.div`
width: 414px;
height: 425px;
flex-shrink: 0;
border-radius: 37px;
background: #FFF;
box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.07);
display: flex;
justify-content: center;

`
const ProductDetails = styled.div`
 display: flex;
//  justify-content: space-between;
 margin: 0 auto;
 width: 1350px;
`
const Description = styled.div`
display: flex;
flex-direction: column;
margin-left: 40px;
width: 70%;
padding: 30px;
color: #000000;
`;
const QuantityContainer = styled.div`
display:  flex;
width: 290px;
// justify-content: space-between;
`;
const CountQuantity = styled.div`
width: 100px;
max-height: 30px;
background: #E6E6E6;
border-radius: 7px;
position: relative;
top: 5px;
margin-right: 10px;
// padding: 10px;
`
const SimilarProductContainer = styled.div`
 display: flex;
 flex-direction: column;
 gap: 22px;
 margin: 0 auto;
 margin-top: 40px;
`
const SimilarProduct = styled.div`
display: flex;
 gap: 22.7px;
 margin: 0 auto;
 margin-top:5px;
 width: 1428.917px;
height: 260px;
flex-shrink: 0;
// width: 100%;
`;
const TrendingProductContainer = styled.div`
 display: flex;
 flex-direction: column;
 gap: 22px;
 margin: 0 auto;
 margin-top: 40px;
`
const TrendingProduct = styled.div`
display: flex;
 gap: 22.7px;
 margin: 0 auto;
 margin-top:5px;
 width: 1428.917px;
 height: 260px;
 flex-shrink: 0;
`;
const Title = styled.div`
color: #000;
font-family: Poppins;
font-size: 29px;
font-style: normal;
font-weight: 600;
line-height: normal;
letter-spacing: 1.1px;
margin-left: 34px;

`;
const NameAndDate = styled.div`
color: #000;
font-family: Poppins;
font-size: 16.5px;
font-style: normal;
font-weight: 600;
line-height: normal;

`;
const CustomerReviewContainer = styled.div`
  display: flex;
  flex-direction: column;
 margin: 0 auto;
  gap: 10px;
  width: 1323px;
margin-top: 96.57px;
`;
const CustomerReview =styled.div`
width: 1212px;
height: 135px;
flex-shrink: 0;
border-radius: 6px;
border: 1px solid rgba(151, 151, 151, 0.68);
position: relative;
margin-bottom: 50px;
box-sizing: border-box;
`;
const StarsContainer = styled.div`
padding: 16px 0 0 0.75rem;
box-sizing: border-box;
`
const Typo = styled.div`
color: #000;
font-family: Poppins;
font-size: 15px;
font-style: normal;
font-weight: 400;
line-height: normal;
letter-spacing: 0.523px;
width: 1169px;
height: 53px;
flex-shrink: 0;
text-align: justify;
margin-bottom: 13px
`;

const Price = styled.span`
color: #FE9F09;
font-family: Poppins;
font-size: 15.167px;
font-style: normal;
font-weight: 500;
line-height: normal;
`;
export interface cartDataType {
    name: string;
    price?: any;
    featured_img?: string;
    slug?: string;
    product_count: number;
    description?: string;
}
function ProductsDetails ({productsInformation, cartDataCat}: {productsInformation: TProductResponse[], cartDataCat: TProductTesting}): JSX.Element {
   const {success} = useNotify()
   const {handleAddProductToCart, cartProducts} = useCart()
   const [isProductInCart, setIsProductInCart] = useState(false)
   const [cartProduct, setCartProduct]= useState<TProductTesting>({
      id: cartDataCat.id,
      title: cartDataCat.title,
      slug: cartDataCat.slug,
      description: cartDataCat.description,
      price: cartDataCat.price,
      product_count: cartDataCat.product_count,
      featured_image: cartDataCat.featured_image
   })
   console.log(cartProducts)
const router = useRouter()
   const addToCart = (product: TProductTesting)=> {
      if(product.product_count > 0) {
         handleAddProductToCart(product)
         success("product successfully added to cart")
      }
   }
   useEffect(()=> {
      setIsProductInCart(false)
      if(Array.isArray(cartProducts) ) {
         let existingProduct= cartProducts.findIndex((item)=> item.id === cartDataCat.id)
         if(existingProduct > -1) {
            setIsProductInCart(true)
         }
      }
   }, [cartProducts, cartDataCat.id])
   const pathname = usePathname()
   const handleQtyIncrease = useCallback(()=> {
      if(cartProduct.product_count === 20) {
         return;
      }
      setCartProduct((prev: TProduct)=> {
         return {...prev, product_count: prev.product_count+1}
      })
   }, [cartProduct])
   const handleQtyDecrease = useCallback(()=> {
      if(cartProduct.product_count === 1 ) {
         return;
      }
      setCartProduct((prev: TProduct)=> {
         return {...prev, product_count: prev.product_count-1}
      })
   }, [cartProduct])
   
   return (
      <>
         {
          productsInformation.map((product)=> {
            return product.data.map((detail, index)=> {
               return <div key={index}>
                {
               pathname === `/products/${detail.link}` && 
               <PageWrapper>
               <Container key={index}>
                     <HeaderTitle> <Link href={`/products/categories/${detail.slug}`} className="mr-2">{detail.slug?.toLocaleUpperCase()}</Link>  {'>'} <strong className="ml-3">{detail.name.toUpperCase()}</strong>
                     </HeaderTitle>
                     <RecAndDot/>
                     <Spacer/>
                        <ProductDetails>
                             <DetailCard>
                                 <Image
                                 src={detail.src}
                                 alt=""
                                 height={204}
                                 width={200}
                                 />
                              </DetailCard>
                             <Description>
                              <strong className="text-[22px] text-[#000000]">{detail.name}</strong>
                              <Spacer height={6}/>
                              <p className="text-[#F49342]">{format_price(detail.price)}
                              </p>
                              <Spacer height={20}/>
                              <h4>ITEM DESCRIPTION</h4>
                              <Spacer height={15}/>
                              <p className="w-[68%]">{detail.description}</p>
                              <Spacer height={25}/>
                              <p>QUANTITY</p>
                              <Spacer height={12}/>
                              <QuantityContainer>
                                 {/* would rewrite below, it is manually coded, just discovered and I want to see it working(Testing) */}
                              {isProductInCart ? '' :<CountQuantity>
                                 <Quantity 
                                 cartQuantity={cartProduct}
                                 handleQtyDecrease={handleQtyDecrease}
                                 handleQtyIncrease={handleQtyIncrease}
                                 />
                              </CountQuantity>}
                              {isProductInCart ? <div className="ml-0  absolute ">
                                  <p className="text-slate-500 flex items-center gap-1 mb-2">
                                  <MdCheckCircle className={`text-[tomato]`} size={24}/>
                                  <span className="text-[10px] text-[green]">Product added to cart</span>
                                  </p>
                                  <div>
                                    <Button
                                      type="submit" 
                                      padding="xxs"
                                      className="text-white w-[240px] uppercase shadow-sm" 
                                      onClick={()=> router.push('/cart')}
                                    >
                                       <span className="text-[10px]">View Cart</span>
                                    </Button>
                                  </div>
                              </div> :<Button onClick={()=>addToCart(cartProduct)}
                                 kind='secondary'
                                 type="submit" 
                                 padding="xxs"
                                 className="text-white w-[140px] uppercase shadow-sm" 
                                 ><span className="text-[10px]">Add To Cart</span>
                                 </Button>}
                              </QuantityContainer>
                             </Description>
                        </ProductDetails>
                        <Spacer height={20}/>
                        <SimilarProductContainer>
                           <Title>SIMILAR PRODUCTS</Title>
                           <Spacer/>
                           <SimilarProduct>
                              { product.data.map((similar, index)=> {
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
                                            src={similar.src}
                                            alt={similar.alt}
                                            width={similar.width}
                                            height={similar.height}
                                            />
                                                  </ImageContainer>
                                          <span className='font-bold text-[16px] text-[#393939]'>{similar.name}</span>
                                          <Spacer/>
                                            <Price className='text-[#393939]'>{format_price(similar.price)}</Price>
                                            <Spacer/>
                                            <AddToCartButton onClick={()=> addToCart(cartProduct)}>Add To Cart</AddToCartButton>
                                            <Spacer/>
                                      </ProductCategoryCard>
                                        }
                                    </>
                                 })
                              }
                  </SimilarProduct>
                        </SimilarProductContainer>
                        <Spacer height={50}/>
                        <TrendingProductContainer>
                           <Title>TRENDING PRODUCTS</Title>
                           <Spacer/>
                           <TrendingProduct>
                              {
                                 product.data.map((trending, index)=> {
                                    return <>
                                        { index < 5 &&
                                       <ProductCategoryCard
                                          color="white"
                                          key={index}
                                          className='flex flex-col justify-center items-center cursor-pointer'
                                          width='shop' height='shop'>
                                            <LikeButton/>
                                                  <ImageContainer>
                                                  <Image
                                            src={trending.src}
                                            alt={trending.alt}
                                            width={trending.width}
                                            height={trending.height}
                                            />
                                                  </ImageContainer>
                                                  <Spacer/>
                                          <span className='font-bold text-[16px] text-[#393939]'>{trending.name}</span>
                                          <Spacer/>
                                            <Price className='text-[#393939]'>{format_price(trending.price)}</Price>
                                          <Spacer/>
                                            <AddToCartButton>Add To Cart</AddToCartButton>
                                          <Spacer/>
                                      </ProductCategoryCard>
                                        }
                                    </>
                                 })
                              }
                  </TrendingProduct>
                        </TrendingProductContainer>
                        <Spacer height={25}/>
                        <PageWrapper>
                        <CustomerReviewContainer>
                           <h3>ADD CUSTOMER REVIEW</h3>
                           <Spacer height={96}/>
                           <CustomerReview>
                              <StarsContainer>
                           <Rating value={0} readOnly/>
                              </StarsContainer>
                              <Spacer height={32}/>
                           <TextArea placeholder="Write Comment" className='outline-none' color="#F2F2F2" border="none"/>
                           <input type="submit" className="border border-none outline-none bg-none text-[#26D93E] uppercase absolute right-10 bottom-5 cursor-pointer"/>
                           </CustomerReview>
                           <Spacer height={15}/>
                           <Rating value={2} readOnly/>
                           <Spacer height={17}/>
                           <NameAndDate>Hermione G- {new Date().getFullYear()}</NameAndDate>
                           <Spacer height={10}/>
                           <Typo>Lorem ipsum dolor sit amet, consectetur 
                              adipiscing elit, sed do eiusmod tempor incididunt ut labore 
                              et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                               exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                               Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</Typo>
                           <Spacer height={30}/>
                           <Separator className="w-[1165px] h-[1px] shrink-0 stroke-[#979797]"/>
                           <Spacer/>
                           <Rating value={3} readOnly/>
                           <Spacer height={17}/>
                           <NameAndDate>Hermione G-{new Date().getFullYear()}</NameAndDate>
                           <Spacer height={10}/>
                           <Typo>Lorem ipsum dolor sit amet, consectetur 
                              adipiscing elit, sed do eiusmod tempor incididunt ut labore 
                              et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                               exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                               Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</Typo>
                                <Spacer height={30}/>
                                <Separator className="w-[1165px] h-[1px] shrink-0 stroke-[#979797]"/>
                                <Spacer/>
                                <Rating value={3} readOnly/>
                           <Spacer height={17}/>
                           <NameAndDate>Hermione G-{new Date().getFullYear()}</NameAndDate>
                           <Spacer height={10}/>
                           <Typo>Lorem ipsum dolor sit amet, consectetur  
                              adipiscing elit, sed do eiusmod tempor incididunt ut labore 
                              et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                               exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                               Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</Typo>
                        </CustomerReviewContainer>
                        </PageWrapper>
                        <Spacer height={100}/>
               </Container>
               </PageWrapper>
             }
               </div>
            })
          })
         }
          {/* <GetYourGroceries>
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
          </GetYourGroceries> */}
          <Image
          src={'/doorstep.svg'}
          alt=""
          width={1479}
          height={269}
          />
      </>
   )
}
export default ProductsDetails;