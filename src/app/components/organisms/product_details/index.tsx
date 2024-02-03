import AddToCartButton from "@app/components/atoms/AddToCartButton";
import { Button } from "@app/components/atoms/Buttons";
import ProductCategoryCard from "@app/components/atoms/ProductCategoryCard";
import Quantity from "@app/components/atoms/Quantity";
import { Separator } from "@app/components/atoms/Separator";
import { Spacer } from "@app/components/atoms/Spacer";
import TextArea from "@app/components/atoms/TextArea";
import { LikeButton } from "@app/components/atoms/like";
import { RecAndDot } from "@app/components/atoms/rectangleAndDot";
// import ReviewStarRating from "@app/components/atoms/star_rating";
import { TProductResponse } from "@app/constant/constant";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styled from "styled-components";
import { Rating } from "@mui/material";
import { useCallback, useState } from "react";
import { format_price } from "@app/utils/helper";
// import { TProduct } from "@app/types";
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
    margin-top: 67px;

`;
const ProductDetails = styled.div`
 display: flex;
//  justify-content: space-between;
 margin: 0 auto;
 width: 1223px;
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
 justify-content: center;
 width: 100%;
 margin-top:5px;
`;
const SimilarImage = styled.div`
min-height: 100px;
min-width: 100px;
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
 justify-content: center;
 width: 100%;
 margin-top:5px;
`;
const TrendingImage = styled.div`
min-height: 100px;
min-width: 100px;
`;
const LikeButtonContainer = styled.div`
min-width: 24px;
min-height: 24px;
`;
const Title = styled.div`
  color: #000000;
  font-weight: 700;
  font-size: 25px;

`;
const NameAndDate = styled.div`
  color: #000000;
  font-weight: 500;
  font-size: 15px;

`;
const CustomerReviewContainer = styled.div`
  display: flex;
  flex-direction: column;
 margin: 0 auto;
  gap: 10px;
  width: 1323px;
`;
const CustomerReview =styled.div`
// width: 1212px;
flex-shrink: 0;
border-radius: 6px;
height: 119px;
border: 1px solid rgba(151, 151, 151, 0.68);
 position: relative;
`;
const StarsContainer = styled.div`
position: relative;
top: 5px;
`
function ProductsDetails ({productsInformation, cartData}: {productsInformation: TProductResponse[], cartData: any}): JSX.Element {
   const [cartProduct, setCartProduct]= useState<any>({
      name: cartData.name,
      slug: cartData.slug,
      description: cartData.description,
      price: cartData.price,
      product_count: cartData.product_count,
      featured_image: cartData.src
   })
   const pathname = usePathname()
   const handleQtyIncrease = useCallback(()=> {
      setCartProduct((prev: any)=> {
         return {...prev, product_count: +prev.product_count}
      })
   }, [])
   const handleQtyDecrease = useCallback(()=> {
      setCartProduct((prev: any)=> {
         return {...prev, product_count: -prev.product_count}
      })
   }, [])
   return (
      <>
         {
          productsInformation.map((product)=> {
            return product.data.map((detail, index)=> {
               return <>
                {
               pathname === `/products/${detail.link}` && 
               <Container key={index}>
                     <HeaderTitle> <Link href={`/products/categories/${detail.slug}`} className="mr-2">{detail.slug}</Link>  {'>'} <strong className="ml-3">{detail.name.toUpperCase()}</strong>
                     </HeaderTitle>
                     <Spacer/>
                     <RecAndDot/>
                     <Spacer/>
                        <ProductDetails>
                             <div className="w-[300px] h-[300px] rounded-3xl bg-white flex justify-center">
                                 <Image
                                 src={detail.src}
                                 alt=""
                                 height={120}
                                 width={120}
                                 />
                              </div>
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
                                 <CountQuantity>
                                   <Quantity 
                                   cartProduct={cartProduct}
                                   handleQtyDecrease={handleQtyDecrease}
                                   handleQtyIncrease={handleQtyIncrease}
                                   />
                                 </CountQuantity>
                                 <Button kind='secondary' type="submit" padding="xxs" className="text-white w-[140px] uppercase shadow-sm" ><span className="text-[10px]">Add To Cart</span></Button>
                              </QuantityContainer>
                             </Description>
                        </ProductDetails>
                        <Spacer height={20}/>
                        <SimilarProductContainer>
                           <Title>SIMILAR PRODUCTS</Title>
                           <SimilarProduct>
                              {
                                 product.data.map((similar, index)=> {
                                    return <>
                                        {
                                          index < 5 &&  <ProductCategoryCard
                                          color="white"
                                          className='flex flex-col justify-center items-center gap-3 cursor-pointer'
                                          width='shop' height='shop'>
                                            <LikeButtonContainer>
                                            <LikeButton/>
                                            </LikeButtonContainer>
                                                  <SimilarImage>
                                                  <Image
                                            src={similar.src}
                                            alt={similar.alt}
                                            width={similar.width}
                                            height={similar.height}
                                            objectFit='cover'
                                            objectPosition='center'
                                            />
                                                  </SimilarImage>
                                          <span className='font-bold text-[16px] text-[#393939]'>{similar.name}</span>
                                            <span className='text-[#393939]'>{similar.price}</span>
                                            <AddToCartButton>Add To Cart</AddToCartButton>
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
                                          className='flex flex-col justify-center items-center gap-3 cursor-pointer'
                                          width='shop' height='shop'>
                                            <LikeButtonContainer>
                                            <LikeButton/>
                                            </LikeButtonContainer>
                                                  <TrendingImage>
                                                  <Image
                                            src={trending.src}
                                            alt={trending.alt}
                                            width={trending.width}
                                            height={trending.height}
                                            objectFit='cover'
                                            objectPosition='center'
                                            />
                                                  </TrendingImage>
                                          <span className='font-bold text-[16px] text-[#393939]'>{trending.name}</span>
                                            <span className='text-[#393939]'>{trending.price}</span>
                                            <AddToCartButton>Add To Cart</AddToCartButton>
                                      </ProductCategoryCard>
                                        }
                                    </>
                                 })
                              }
                  </TrendingProduct>
                        </TrendingProductContainer>
                        <Spacer height={25}/>
                        <CustomerReviewContainer>
                           <h3>ADD CUSTOMER REVIEW</h3>
                           <Spacer height={50}/>
                           <CustomerReview>
                              <StarsContainer>
                              {/* <ReviewStarRating/> */}
                           <Rating value={0} readOnly/>
                              </StarsContainer>
                              <Spacer height={20}/>
                           <TextArea placeholder="Write Comment" className='outline-none' color="#F2F2F2" border="none"/>
                           <input type="submit" className="border border-none outline-none bg-none text-[#26D93E] uppercase absolute right-10 bottom-5"/>
                           </CustomerReview>
                           <Spacer height={15}/>
                           {/* <ReviewStarRating/> */}
                           <Rating value={2} readOnly/>
                           <NameAndDate>Hermione G- November 6, 2020</NameAndDate>
                           <p className="text-[#000000] w-[1000px] leading-5">Lorem ipsum dolor sit amet, consectetur 
                              adipiscing elit, sed do eiusmod tempor incididunt ut labore 
                              et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                               exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                               Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                           <Spacer/>
                           <Separator/>
                           <Spacer/>
                           {/* <ReviewStarRating/> */}
                           <Rating value={3} readOnly/>
                           <NameAndDate>Hermione G- November 6, 2020</NameAndDate>
                           <p className="text-[#000000] w-[1000px] leading-5">Lorem ipsum dolor sit amet, consectetur 
                              adipiscing elit, sed do eiusmod tempor incididunt ut labore 
                              et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                               exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                               Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                                <Spacer/>
                                <Separator/>
                                <Spacer/>
                                {/* <ReviewStarRating/> */}
                                <Rating value={3} readOnly/>
                           <NameAndDate>Hermione G- November 6, 2020</NameAndDate>
                           <p className="text-[#000000] w-[1000px] leading-5">Lorem ipsum dolor sit amet, consectetur 
                              adipiscing elit, sed do eiusmod tempor incididunt ut labore 
                              et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                               exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                               Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                        </CustomerReviewContainer>
                        <Spacer height={100}/>
                        <Image
                        src='/doorstep.svg'
                        alt=""
                        width={1443}
                        height={269}
                        className="m-auto"

                        />
               </Container>
             }
               </>
            })
          })
         }
      </>
   )
}
export default ProductsDetails;