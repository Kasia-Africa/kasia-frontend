"use client"
import Image from "next/image";
import styled from "styled-components";

const EmptyCartContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
& p {
    color: #8C8C8C;
    font-size: 24px;
}
`
const EmptyCart = () => {
    return (  
            <EmptyCartContainer>
            <Image
            src={'/empty_cart.svg'}
            alt="Empty cart"
            height={525}
            width={443}
            className="mt-[86px]"
            />
            <p className="mt-[28px]">No Product Available !</p>
            <Image
            src={'/doorstep.svg'}
            alt="doorstep"
            height={269}
            width={947}
            className="mt-[150px]"
            />
            </EmptyCartContainer>
    );
}
 
export default EmptyCart;