"use client"
import { Button } from '@app/components/atoms/Buttons'
import React from 'react'
import styled from 'styled-components'
const Title =  styled.h1`
    color: white;
    font-weight: 800;
    text-align: center;
    font-size: 22px;
    text-transform: uppercase;
    position: relative;
     bottom: 70px;
    letter-spacing: 0.25px;
`
const Container = styled.div`
margin-top: -10px;
// padding-left: 80px;
width: 100%;
`
const Description = styled.p`
font-size: 15px;
padding: 30px;
line-height: 28px;
display: flex;
align-items: center;
`

const BecomeAShopper:React.FC =()=> {
                return (
    <>
        <Title>Become A Shopper</Title>
        <Container>
        <Description>
Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
Lorem Ipsum has been the industry&apos; s standard dummy text ever since the 1500s, 
when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
 It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using &apos; Content here, content here&apos; , making it look like readable English. 
 
Many desktop publishing packages and web page editors now use Lorem Ipsum as 

their default model text, and a search for lorem ipsum will uncover many web 
sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using &apos; Content here, content here&apos; , making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for &apos; lorem ipsum&apos;  will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).t is a long established fact that a reader will be distracted by 
the readable content of a page when looking at its layout.
The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, 
as opposed to
 using &apos; Content here, content here&apos; , making it look like readable English. Many desktop publishing packages
  and web page editors now use Lorem Ipsum as their default model text, and a search for &apos; lorem ipsum&apos;  will 
  uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by 
  accident, sometimes on purpose (injected humour and the like).t is a long established fact that a reader will
   be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is 
   that it has a more-or-less normal distribution of letters, as opposed to using &apos; Content here, content here&apos; ,
    making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum 
    as their default model text, and a search for &apos; lorem ipsum&apos;  will uncover many web sites still in their infancy. 
    Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and
     the like).t is a long established fact that a reader will be distracted by the readable content of a page when
      looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using &apos;Content here, 
      content here&apos; , making it look like readable English. Many desktop publishing packages and web page editors now use 
      Lorem Ipsum as their default model text, and a search for &apos; lorem ipsum&apos; 
       will uncover many web sites still in their infancy. Various versions have evolved
        over the years, sometimes by accident, sometimes on purpose (injected humour and the like).

        </Description>
            <div className='flex justify-center w-[90%]'>
            <Button width='mini' kind='secondary' padding='xxs'>
            <p className='text-[10px] text-white '>Contact Us</p>
            </Button>
            </div>
        </Container>
        </>
                )
}
export default BecomeAShopper